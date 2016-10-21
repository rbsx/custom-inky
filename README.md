# custom-inky
Версия Инки с кастомными HTML тегами созданными 
для работы с Kilogram

Теги:
```javascript
wrap: 'wrap',
rower: 'rower',
cols: 'cols'
```

```html
<wrap>
  Ваш контент
</wrap>
```
разворачивается в главную таблицу, которая создает тело письма:
```html
<div %attribute class="%class">
  /* фолбэк для MS Outlook
  <!--[if (gte mso 9)|(IE)]>
  <table width="600" align="center">
  <tr>
  <td>
  <![endif]--> */
  <table class="outer" cellpadding="0" align="center">
    ваш контент
  </table>
  /* <!--[if (gte mso 9)|(IE)]>
  </td>
  </tr>
  </table>
  <![endif]--> */
</div>
```
Где `%attribute` это атрибут который вы зададите тегу, а `%class` - класс.
Работает для всех тегов. 

У `<rower>` есть обязательный атрибут `cols`

```html
<rower cols="2">
  <cols>
    1-st column
  </cols>
  <cols class="awesome">
    2-nd column
  </cols>
</rower>
```
 Становится 
 ```html
 <tr cols="2" class="row">
  <td class="two-columns">
    <!--[if (gte mso 9)|(IE)]>
    <table width="100%">
    <tr>
    <td width="50%" valign="top">
    <![endif]-->
      <div class="column">
        <table width="100%">
          <tr>
            <td>
              1-st column
            </td>
          </tr>
        </table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      <td width="50%" valign="top">
      <![endif]-->
      <div class="column awesome">
        <table width="100%">
          <tr>
            <td>
              2-nd column
            </td>
          </tr>
        </table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
      <![endif]-->
    </td>
  </tr>
 ```
