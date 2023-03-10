import React from 'react'
import imgDeliver from '../../assets/deliver/elean62862 1.jpg'
import icon from '../../assets/deliver/Group 1484.svg'
import { useState } from 'react'
import FloatBtn from '../../Components/FloatBtn'

const Deliver = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [time, setTime] = useState('')
  const [comment, setComment] = useState('')
  function f2() {
    setName('')
    setPhone('')
    setTime('')
    setComment('')
  }
  return (
    <section className='deliver'>
      <div className='container'>
        <FloatBtn />
        <h2 className='deliver__title'>Доставка</h2>
        <ul className='deliver__ul'>
          <li className='deliver__ul-il'><a className='deliver__ul-li' href="#">ОБМЕН</a></li>
          <li className='deliver__ul-il'><a className='deliver__ul-li' href="#">ВОЗВРАТ</a></li>
          <li className='deliver__ul-il'><a className='deliver__ul-li' href="#">ОПЛАТА</a></li>
        </ul>
        <div className='deliver__page'>
          <img className='deliver__page-img' src={imgDeliver} alt="imgDeliver" />
          <div className='deliver__page-text'>
            <h2 className='deliver__page-title'>ВИДЫ ДОСТАВКИ</h2>
            <p className='deliver__page-p'>Механизм нашей работы продуман до мелочей. Вам не придется беспокоиться и долго ждать.</p>
            <p className='deliver__page-p'> Служба доставки работает без выходных с 8 утра до 1 часа ночи. Мы осуществляем доставку по Москве и ближайшему Подмосковью.</p>
            <p className='deliver__page-p'>Оформляя заказ, просто выберите подходящий вам временной интервал и мы доставим ваши продукты точно в указанное время.</p>
            <p className='deliver__page-p'>Срок доставки с момента подтверждения <br />заказа — 1-3 дня.</p>
            <span className='deliver__page-span_first'>
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 20H29.5" stroke="#D1B59A" stroke-width="2" />
                <path d="M20.5 24L20.5 7" stroke="#D1B59A" stroke-width="2" />
                <path d="M0.5 20H4.5" stroke="#D1B59A" stroke-width="2" />
                <path d="M36.5 20H40.5" stroke="#D1B59A" stroke-width="2" />
                <path d="M6.35791 34.1426L9.18634 31.3142" stroke="#D1B59A" stroke-width="2" />
                <path d="M31.8135 8.68555L34.6419 5.85712" stroke="#D1B59A" stroke-width="2" />
                <path d="M34.6426 34.1426L31.8142 31.3142" stroke="#D1B59A" stroke-width="2" />
                <path d="M9.18555 8.6875L6.35712 5.85907" stroke="#D1B59A" stroke-width="2" />
                <path d="M20.5 40L20.5 36" stroke="#D1B59A" stroke-width="2" />
                <path d="M20.5 4L20.5 -1.78814e-07" stroke="#D1B59A" stroke-width="2" />
                <circle cx="20.5" cy="20" r="19" stroke="#D1B59A" stroke-width="2" />
              </svg>
            </span>
            <p className='deliver__page-p'>Доставка во все регионы осуществляется по 100%<br /> предоплате на нашем сайте любой картой, курьерской<br /> службой до двери.</p>
            <p className='deliver__page-p'>При покупке на сумму от 15 000₽ доставка в подарок, в остальных случаях 500₽, за границу 1 200₽.</p>
            <span className='deliver__page-span_second'>
              <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 10.9023H39.332V17.8393H1.5V10.9023Z" stroke="#D1B59A" stroke-width="2" stroke-miterlimit="3.8637" />
                <path d="M17 10.9023H23.568V40.1003H17V10.9023Z" stroke="#D1B59A" stroke-width="2" stroke-miterlimit="3.8637" />
                <path d="M38.069 17.8594H2.93103V40.1004H38.069V17.8594Z" stroke="#D1B59A" stroke-width="2" stroke-miterlimit="3.8637" />
                <path d="M20.679 10.7888C20.679 10.7888 20.142 5.75277 21.451 3.47077C22.76 1.18877 26.268 -0.0542263 27.846 2.16177C29.424 4.37677 28.283 9.37777 21.098 10.8888" stroke="#D1B59A" stroke-width="2" stroke-miterlimit="3.8637" />
                <path d="M20.494 10.7888C20.494 10.7888 21.0309 5.75277 19.7219 3.47077C18.4129 1.18877 14.905 -0.0542263 13.327 2.16177C11.749 4.37677 12.89 9.37777 20.075 10.8888" stroke="#D1B59A" stroke-width="2" stroke-miterlimit="3.8637" />
              </svg>
            </span>
          </div>
        </div>
        <h2 className='deliver__title-two'>ВОПРОСЫ И ОТВЕТЫ</h2>
        <div className='deliver__page-two'>
          <div className='deliver__page-two_blocks'>
            <div className='deliver__page-two_head'>
              <h2 className='deliver__page-two_title'>ЕСТЬ ЛИ ДОСТАВКА ЗАГРАНИЦУ ?</h2>
              <span>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5417 27.0834C15.877 27.0834 18.1283 26.4902 20.1222 25.3795L25.8574 25.8574L25.3795 20.1222C26.4902 18.1283 27.0834 15.877 27.0834 13.5417C27.0834 6.06282 21.0206 0 13.5417 0C6.06282 0 0 6.06282 0 13.5417C0 21.0206 6.06282 27.0834 13.5417 27.0834ZM19.114 22.8333L19.4886 22.6082L22.8926 22.8918L22.6089 19.4879L22.8341 19.1133C23.8374 17.4442 24.375 15.5336 24.375 13.5409C24.375 7.55779 19.5247 2.70754 13.5416 2.70754C7.55854 2.70754 2.70828 7.55779 2.70828 13.5409C2.70828 19.524 7.55854 24.3742 13.5416 24.3742C15.5343 24.3742 17.4449 23.8367 19.114 22.8333ZM13.5421 20.3099C14.2902 20.3099 14.8967 19.7036 14.8967 18.9557C14.8967 18.2078 14.2902 17.6016 13.5421 17.6016C12.7939 17.6016 12.1874 18.2078 12.1874 18.9557C12.1874 19.7036 12.7939 20.3099 13.5421 20.3099ZM12.1876 16.2488H14.8959V14.8947C14.8959 14.898 14.9023 14.8909 14.9168 14.875C14.9523 14.8358 15.0366 14.743 15.1945 14.6177C15.3301 14.5101 15.3722 14.4822 15.7149 14.2649C16.8812 13.5256 17.6043 12.2399 17.6043 10.8322C17.6043 8.5885 15.7854 6.76965 13.5418 6.76965C11.2981 6.76965 9.47925 8.5885 9.47925 10.8322H12.1876C12.1876 10.0843 12.7939 9.47799 13.5418 9.47799C14.2896 9.47799 14.8959 10.0843 14.8959 10.8322C14.8959 11.3025 14.6556 11.7298 14.2648 11.9775C13.8264 12.2555 13.7536 12.3037 13.5113 12.496C12.7059 13.1349 12.1876 13.8962 12.1876 14.8947V16.2488Z" fill="#D1B59A" />
                </svg>
              </span>
            </div>
            <p className='deliver__page-two_p'>
              Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.
            </p>
          </div>
          <div className='deliver__page-two_blocks'>
            <div className='deliver__page-two_head'>
              <h2 className='deliver__page-two_title'>КАК ПОДАБРАТЬ СВОЙ РАЗМЕР?</h2>
              <span>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5417 27.0834C15.877 27.0834 18.1283 26.4902 20.1222 25.3795L25.8574 25.8574L25.3795 20.1222C26.4902 18.1283 27.0834 15.877 27.0834 13.5417C27.0834 6.06282 21.0206 0 13.5417 0C6.06282 0 0 6.06282 0 13.5417C0 21.0206 6.06282 27.0834 13.5417 27.0834ZM19.114 22.8333L19.4886 22.6082L22.8926 22.8918L22.6089 19.4879L22.8341 19.1133C23.8374 17.4442 24.375 15.5336 24.375 13.5409C24.375 7.55779 19.5247 2.70754 13.5416 2.70754C7.55854 2.70754 2.70828 7.55779 2.70828 13.5409C2.70828 19.524 7.55854 24.3742 13.5416 24.3742C15.5343 24.3742 17.4449 23.8367 19.114 22.8333ZM13.5421 20.3099C14.2902 20.3099 14.8967 19.7036 14.8967 18.9557C14.8967 18.2078 14.2902 17.6016 13.5421 17.6016C12.7939 17.6016 12.1874 18.2078 12.1874 18.9557C12.1874 19.7036 12.7939 20.3099 13.5421 20.3099ZM12.1876 16.2488H14.8959V14.8947C14.8959 14.898 14.9023 14.8909 14.9168 14.875C14.9523 14.8358 15.0366 14.743 15.1945 14.6177C15.3301 14.5101 15.3722 14.4822 15.7149 14.2649C16.8812 13.5256 17.6043 12.2399 17.6043 10.8322C17.6043 8.5885 15.7854 6.76965 13.5418 6.76965C11.2981 6.76965 9.47925 8.5885 9.47925 10.8322H12.1876C12.1876 10.0843 12.7939 9.47799 13.5418 9.47799C14.2896 9.47799 14.8959 10.0843 14.8959 10.8322C14.8959 11.3025 14.6556 11.7298 14.2648 11.9775C13.8264 12.2555 13.7536 12.3037 13.5113 12.496C12.7059 13.1349 12.1876 13.8962 12.1876 14.8947V16.2488Z" fill="#D1B59A" />
                </svg>
              </span>
            </div>

            <p className='deliver__page-two_p'>
              Максимально точно подобрать размер мы помогаем по меркам: обхват груди, талии и бёдер. Пришлите нам свои мерки и мы в 99% случаев правильно подберем Ваш размер.
            </p>
          </div>
          <div className='deliver__page-two_blocks'>
            <div className='deliver__page-two_head'>
              <h2 className='deliver__page-two_title'>КАК ПРИМЕРИТЬ?</h2>
              <span>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5417 27.0834C15.877 27.0834 18.1283 26.4902 20.1222 25.3795L25.8574 25.8574L25.3795 20.1222C26.4902 18.1283 27.0834 15.877 27.0834 13.5417C27.0834 6.06282 21.0206 0 13.5417 0C6.06282 0 0 6.06282 0 13.5417C0 21.0206 6.06282 27.0834 13.5417 27.0834ZM19.114 22.8333L19.4886 22.6082L22.8926 22.8918L22.6089 19.4879L22.8341 19.1133C23.8374 17.4442 24.375 15.5336 24.375 13.5409C24.375 7.55779 19.5247 2.70754 13.5416 2.70754C7.55854 2.70754 2.70828 7.55779 2.70828 13.5409C2.70828 19.524 7.55854 24.3742 13.5416 24.3742C15.5343 24.3742 17.4449 23.8367 19.114 22.8333ZM13.5421 20.3099C14.2902 20.3099 14.8967 19.7036 14.8967 18.9557C14.8967 18.2078 14.2902 17.6016 13.5421 17.6016C12.7939 17.6016 12.1874 18.2078 12.1874 18.9557C12.1874 19.7036 12.7939 20.3099 13.5421 20.3099ZM12.1876 16.2488H14.8959V14.8947C14.8959 14.898 14.9023 14.8909 14.9168 14.875C14.9523 14.8358 15.0366 14.743 15.1945 14.6177C15.3301 14.5101 15.3722 14.4822 15.7149 14.2649C16.8812 13.5256 17.6043 12.2399 17.6043 10.8322C17.6043 8.5885 15.7854 6.76965 13.5418 6.76965C11.2981 6.76965 9.47925 8.5885 9.47925 10.8322H12.1876C12.1876 10.0843 12.7939 9.47799 13.5418 9.47799C14.2896 9.47799 14.8959 10.0843 14.8959 10.8322C14.8959 11.3025 14.6556 11.7298 14.2648 11.9775C13.8264 12.2555 13.7536 12.3037 13.5113 12.496C12.7059 13.1349 12.1876 13.8962 12.1876 14.8947V16.2488Z" fill="#D1B59A" />
                </svg>
              </span>
            </div>
            <p className='deliver__page-two_p'>
              В Москве примерить все образы можно в шоуруме по адресу: Новая площадь 8 стр 2, 5 этаж, также Вы можете заказать доставку с выездным стилистом (в том числе ближайшее Подмосковье до 5 км от МКАД).
              Примерка в регионах России возможна при получении при курьере в течение 15 минут.
            </p>
          </div>
          <div className='deliver__page-two_blocks'>
            <div className='deliver__page-two_head'>
              <h2 className='deliver__page-two_title'>ЧТО ДЕЛАТЬ, ЕСЛИ МНЕ НЕ ПОДОЙДЕТ?</h2>
              <span>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5417 27.0834C15.877 27.0834 18.1283 26.4902 20.1222 25.3795L25.8574 25.8574L25.3795 20.1222C26.4902 18.1283 27.0834 15.877 27.0834 13.5417C27.0834 6.06282 21.0206 0 13.5417 0C6.06282 0 0 6.06282 0 13.5417C0 21.0206 6.06282 27.0834 13.5417 27.0834ZM19.114 22.8333L19.4886 22.6082L22.8926 22.8918L22.6089 19.4879L22.8341 19.1133C23.8374 17.4442 24.375 15.5336 24.375 13.5409C24.375 7.55779 19.5247 2.70754 13.5416 2.70754C7.55854 2.70754 2.70828 7.55779 2.70828 13.5409C2.70828 19.524 7.55854 24.3742 13.5416 24.3742C15.5343 24.3742 17.4449 23.8367 19.114 22.8333ZM13.5421 20.3099C14.2902 20.3099 14.8967 19.7036 14.8967 18.9557C14.8967 18.2078 14.2902 17.6016 13.5421 17.6016C12.7939 17.6016 12.1874 18.2078 12.1874 18.9557C12.1874 19.7036 12.7939 20.3099 13.5421 20.3099ZM12.1876 16.2488H14.8959V14.8947C14.8959 14.898 14.9023 14.8909 14.9168 14.875C14.9523 14.8358 15.0366 14.743 15.1945 14.6177C15.3301 14.5101 15.3722 14.4822 15.7149 14.2649C16.8812 13.5256 17.6043 12.2399 17.6043 10.8322C17.6043 8.5885 15.7854 6.76965 13.5418 6.76965C11.2981 6.76965 9.47925 8.5885 9.47925 10.8322H12.1876C12.1876 10.0843 12.7939 9.47799 13.5418 9.47799C14.2896 9.47799 14.8959 10.0843 14.8959 10.8322C14.8959 11.3025 14.6556 11.7298 14.2648 11.9775C13.8264 12.2555 13.7536 12.3037 13.5113 12.496C12.7059 13.1349 12.1876 13.8962 12.1876 14.8947V16.2488Z" fill="#D1B59A" />
                </svg>
              </span>
            </div>
            <p className='deliver__page-two_p'>
              В случае если что-то не подходит, мы за свой счёт делаем замену размера, возврат клиент осуществляет до нашего офиса самостоятельно, возврат денежных средств происходит в течение 3-х дней на карту с которой была произведена оплата.
            </p>
          </div>
        </div>
        <div className='deliver__questions'>
          <div className='deliver__questions-block'>
            <img className='deliver__questions-icon' src={icon} alt="icon" />
            <h2 className='deliver__questions-title'>ЗАДАТЬ ВОПРОС</h2>
            <form className='deliver__questions-form'>
              <div className='deliver__questions-object'><input onChange={(e) => setName(e.target.value)} value={name} className='deliver__questions-object_inp' type="text" placeholder='Введите имя' required /></div>
              <div className='deliver__questions-object'><input onChange={(e) => setPhone(e.target.value)} value={phone} className='deliver__questions-object_inp' type="number" placeholder='Введите номер' required /></div>
              <div className='deliver__questions-object'><input onChange={(e) => setTime(e.target.value)} value={time} className='deliver__questions-object_inp' type="email" placeholder='Введите свой email' required /></div>
              <textarea className='deliver__questions-object_textarea' onChange={(e) => setComment(e.target.value)} value={comment} name="textArea" id="" data-minLength="5" rows="3" placeholder='Сообщение'></textarea>
              <button className='deliver__questions-btn' onClick={f2} type='submit'>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deliver