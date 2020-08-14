import React, { useState } from 'react';
import ScrollTab from 'component/share/ScrollTab';
import Product from 'component/share/Product';

import Header from 'component/share/Header';
import Banner from 'component/mainpage/Banner';
import Category from 'component/mainpage/Category';

function Mainpage() {
  const [menu, setMenu] = useState(['분식야식', '과일샐러드', '밀키트']);

  return (
    <>
      <Header hasSearchBar />
      <Banner />
      <Category />
      <article className="main-article">
        <ScrollTab />
        <section className="section-recommend">번쩍할인 등등 </section>
        <section className="section-advertise">광고</section>
        <section className="section-product">
          {menu.map((item, idx) => {
            return <Product category={item} key={idx} />;
          })}
        </section>
      </article>
    </>
  );
}

export default Mainpage;
