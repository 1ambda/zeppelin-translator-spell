## zeppelin-translator-spell 

Translate text using Google Translator API

## Usage

1. Set `access-token` value for **zeppelin-translate-spell** in `#helium` page 
2. Execute spell :) `%translator source=en target=es Hello!`

See also 

- [How to create **access-token**](https://cloud.google.com/translate/docs/getting-started)
- [Google Translate API Doc: **Language Support**](https://cloud.google.com/translate/docs/languages)

## Screenshots

![](https://raw.githubusercontent.com/1ambda/zeppelin-translator-spell/master/screenshots/config.png)
![](https://raw.githubusercontent.com/1ambda/zeppelin-translator-spell/master/screenshots/example.png)

## Example Paragraph for Testing

```
%translator source=en target=es

Hi! This is new spell using Google translate API :)
```

Then, you will see `¡Hola! Esto es nuevo hechizo utilizando Google Translate API :)`

# License

- Apache 2.0
- Icon from [Icons8.com](https://icons8.com/web-app/1301/globe)