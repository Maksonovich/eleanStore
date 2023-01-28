import React from 'react'

const Catalog = () => {
    return (
        <main className='catalog'>
            <div className="container">
                <h1 className="catalog-title title">Смокинг</h1>
                <div className="catalog-list">
                    <div class="catalog-left">
                        <div class="catalog-bold">КАТЕГОРИИ</div>
                        <nav class="catalog-nav">
                            <ul>
                                <li>SALE</li>
                                <li class="active">Смокинг</li>
                                <li>Костюмы</li>
                                <li>Аксессуары</li>
                                <li>Брюки</li>
                                <li>Блузы</li>
                                <li>Платья</li>
                                <li>Топы и жилет</li>
                                <li>Подарочные сертификаты</li>
                                <li>Юбки</li>
                            </ul>
                        </nav>
                        <div class="catalog-bold">КОЛЕКЦИИ</div>
                        <nav class="catalog-nav">
                            <ul>
                                <li>Осень-зима 22-23</li>
                                <li>Вечерние образы</li>
                                <li>Предзаказ</li>
                                <li></li>
                                <li>Весна-лето 2022</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="catalog-content" id="content">
            <div class="catalog-grid">
                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-barhatnyj.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean000012-590x965.jpg" alt="Жакет-смокинг бархатный зеленый"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-barhatnyj.html">/ Жакет-смокинг бархатный зеленый</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('415');" data-id="415"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">47 500 ₽</div>
                            <div class="catalog__item-text">Благородный бархат</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-s-lackanami-85.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean00005-590x965.jpg" alt="Жакет-смокинг с лацканами"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-s-lackanami-85.html">/ Жакет-смокинг с лацканами</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('236');" data-id="236"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">25 900 ₽</div>
                            <div class="catalog__item-text">Хит продаж</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-rasshityj-zolotymi-pajetkami.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean000021-590x965.jpg" alt="Жакет, расшитый золотыми пайетками"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-rasshityj-zolotymi-pajetkami.html">/ Жакет, расшитый золотыми пайетками</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('417');" data-id="417"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">43 500 ₽</div>
                            <div class="catalog__item-text">Новинка</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block big">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/belyy-zhaket-smoking-na-2-pugovicah-41.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean00004-590x616.jpg" alt="Белый жакет-смокинг на 2 пуговицах"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/belyy-zhaket-smoking-na-2-pugovicah-41.html"> Белый жакет-смокинг на 2 пуговицах</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('311');" data-id="311"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">29 500 ₽</div>
                            <div class="catalog__item-text">Изысканный и нежный</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-oversize.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean0023-590x965.jpg" alt="Жакет-смокинг oversize"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-oversize.html">/ Жакет-смокинг oversize</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('425');" data-id="425"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">33 500 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-barhatnyy-46.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean00003-590x965.jpg" alt="Жакет-смокинг бархатный"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-barhatnyy-46.html">/ Жакет-смокинг бархатный</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('321');" data-id="321"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">47 500 ₽</div>
                            <div class="catalog__item-text">Благородный бархат</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-pritalennyy-s-vorotnikom-shal-koy-88.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean00006-590x965.jpg" alt="Жакет-смокинг приталенный с воротником-шалькой"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-pritalennyy-s-vorotnikom-shal-koy-88.html">/ Жакет-смокинг приталенный с воротником-шалькой</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('323');" data-id="323"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">25 900 ₽</div>
                            <div class="catalog__item-text">Подчеркнет линию талии</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block big">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-pryamoy-69.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2021/AD148D1B-9447-4F80-9A33-4C5170FEDAF6-590x616.jpeg" alt="Жакет-смокинг прямой"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-pryamoy-69.html">/ Жакет-смокинг прямой</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('51');" data-id="51"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">25 900 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/krasnyy-pritalennyy-smoking-95.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/afb440e4-abc6-41e7-8497-6a66ad1fb6ed-590x965.jpeg" alt="Красный приталенный смокинг"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/krasnyy-pritalennyy-smoking-95.html">/ Красный приталенный смокинг</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('133');" data-id="133"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">29 500 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-pryamogo-silueta-s-bryukami-44.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2021/eleancyclo2551-590x965.jpg" alt="Черный смокинг с брюками клеш"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-pryamogo-silueta-s-bryukami-44.html">/ Черный смокинг с брюками клеш</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('230');" data-id="230"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">41 800 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/belyy-zhaket-smoking-59.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean00008-590x965.jpg" alt="Белый жакет-смокинг"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/belyy-zhaket-smoking-59.html">/ Белый жакет-смокинг</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('222');" data-id="222"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">29 500 ₽</div>
                            <div class="catalog__item-text">Благородный айвори оттенок</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block big">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/belyy-smoking-s-zauzhennymi-bryukami-82.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2021/eleancyclo2685-590x616.jpg" alt="Белый смокинг с зауженными брюками"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/belyy-smoking-s-zauzhennymi-bryukami-82.html">/ Белый смокинг с зауженными брюками</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('217');" data-id="217"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">47 400 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-plus-size.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean06149-590x965.jpg" alt="Жакет-смокинг plus size"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-plus-size.html">/ Жакет-смокинг plus size</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('428');" data-id="428"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">33 500 ₽</div>
                            <div class="catalog__item-text">Скоро в наличии</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/belyj-zhaket-smoking-bryuki-klyosh-zhilet-molochnyj-rubashka-babochka-poyas.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/1bba1901-dcf4-4b05-8407-770133ab313f-590x965.jpeg" alt="Жаккардовый жакет-смокинг"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/belyj-zhaket-smoking-bryuki-klyosh-zhilet-molochnyj-rubashka-babochka-poyas.html">/ Жаккардовый жакет-смокинг</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('356');" data-id="356"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">43 500 ₽</div>
                            <div class="catalog__item-text">Лёгкий и нарядный</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/kostyum-trojka-seryj-predzakaz.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2021/kostyum-trojka-seryj-predzakaz/elean4634-590x965.jpg" alt="Смокинг-жакет серебряный"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/kostyum-trojka-seryj-predzakaz.html">/ Смокинг-жакет серебряный</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('340');" data-id="340"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">29 500 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/klassicheskiy-komplekt-s-babochkoy-66.html"><img src="https://eleanboutique.ru/image/cache/catalog/product/osen2020/elean1_58886-590x965.jpg" alt="Классический комплект с бабочкой"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/klassicheskiy-komplekt-s-babochkoy-66.html">/ Классический комплект с бабочкой</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('272');" data-id="272"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">65 200 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/kostyum-barhatnyy-siniy-43.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2022/osen22/img_4199-590x965.jpg" alt="Костюм бархатный синий"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/kostyum-barhatnyy-siniy-43.html">/ Костюм бархатный синий</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('300');" data-id="300"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">71 000 ₽</div>
                            <div class="catalog__item-text">Благородный бархат</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/chernyy-zhaket-smoking-na-2-pugovicah-48.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2021/Facetune(1)-590x965.jpg" alt="Чёрный жакет-смокинг на 2 пуговицах"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/chernyy-zhaket-smoking-na-2-pugovicah-48.html">/ Чёрный жакет-смокинг на 2 пуговицах</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('313');" data-id="313"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">25 900 ₽</div>
                            <div class="catalog__item-text">Изысканный и нежный</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block big">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/chernyj-kostyum-smoking-s-zauzhennymi-bryukami.html"><img src="https://eleanboutique.ru/image/cache/catalog/novinki2021/eleancyclo2559-590x616.jpg" alt="Черный костюм-смокинг с зауженными брюками"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/chernyj-kostyum-smoking-s-zauzhennymi-bryukami.html">/ Черный костюм-смокинг с зауженными брюками</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('368');" data-id="368"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">41 800 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/roskoshnyy-komplekt-s-belym-smokingom-79.html"><img src="https://eleanboutique.ru/image/cache/catalog/product/yanvar21/elean563139(1)-590x965.jpg" alt="Роскошный комплект с белым смокингом"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/roskoshnyy-komplekt-s-belym-smokingom-79.html">/ Роскошный комплект с белым смокингом</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('216');" data-id="216"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">84 200 ₽</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/klassicheskiy-komplekt-s-smokingom-i-zhiletom-68.html"><img src="https://eleanboutique.ru/image/cache/catalog/product/osen2020/oblozhka-590x965.jpg" alt="Классический комплект с смокингом и жилетом"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/klassicheskiy-komplekt-s-smokingom-i-zhiletom-68.html">/ Классический комплект с смокингом и жилетом</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('271');" data-id="271"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">83 100 ₽</div>
                            <div class="catalog__item-text">Мировая классика</div>
                        </div>
                    </div>
                </div>

                <div class="catalog-block">
                    <div class="catalog__item"> <a class="catalog__item-img" href="https://eleanboutique.ru/zhaket-smoking-68.html"><img src="https://eleanboutique.ru/image/cache/catalog/product/smoking/Elean-7751456-590x965.jpg" alt="Жакет-смокинг"/></a>
                        <div class="catalog__item-flex"> <a class="catalog__item-name" href="https://eleanboutique.ru/zhaket-smoking-68.html">/ Жакет-смокинг</a>
                            <div class="catalog__item-favorite fav" onclick="wishlist.update('54');" data-id="54"><svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5769 4.24603C11.8813 3.62026 9.21613 1.37173 6.85609 1.39471C4.43734 1.41857 0.70379 3.00156 1.0187 7.69219C1.29714 11.8357 12.3919 20.3561 12.3919 20.3561C12.4613 20.4073 12.5334 20.4073 12.6081 20.3561C12.6081 20.3561 23.7029 11.8348 23.9813 7.69219C24.2962 3.00156 20.5627 1.41857 18.143 1.39471C15.4022 1.36819 12.2496 4.40512 12.2496 4.40512L10.1093 6.58736" stroke="#333333" stroke-miterlimit="3.8637"></path></svg>
                            </div>
                        </div>
                        <div class="catalog__item-flex last">
                            <div class="catalog__item-price">21 900 ₽</div>
                            <div class="catalog__item-text">Подойдет на рост до 160 см</div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="catalog-loader hidden"></div>
            <div class="hidden"></div>
        </div>
            </div>
        </main>
    )
}

export default Catalog