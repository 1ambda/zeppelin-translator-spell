import {
  SpellBase,
  SpellResult,
  DefaultDisplayType,
} from 'zeppelin-spell';

import 'whatwg-fetch';

export default class TranslatorSpell extends SpellBase {
  constructor() {
    super("%translator");
  }

  interpret(paragraphText, config) {
    const parsed = this.parseConfig(paragraphText);
    const auth = config['access-token'];
    const source = parsed.source;
    const target = parsed.target;
    const text = parsed.text;

    return new SpellResult(this.translate(source, target, auth, text));
  }

  parseConfig(text) {
    const pattern = /^\s*source=(\S+)\s*target=(\S+)\s*([\S\s]*)/g;
    const match = pattern.exec(text);

    if (!match) {
      throw new Error(`Failed to parse configuration. See README`);
    }

    return {
      source: match[1],
      target: match[2],
      text: match[3],
    }
  }

  translate(source, target, auth, text) {
    return fetch('https://translation.googleapis.com/language/translate/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`,
      },
      body: JSON.stringify({
        'q': text,
        'source': source,
        'target': target,
        'format': 'text'
      })
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      }
      throw new Error(`https://translation.googleapis.com/language/translate/v2 ${response.status} (${response.statusText})`);
    }).then((json) => {
      const extracted = json.data.translations.map(t => {
        return t.translatedText;
      });
      return extracted.join('\n');
    });
  }
}
