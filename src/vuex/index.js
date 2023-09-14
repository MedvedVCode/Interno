import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    articles: [
      {
        id: 1,
        title: 'Let’s Get Solution For Building Construction Work',
        img: 'blog-item-img-01.png',
        date: '22 December, 2021',
        tags: [1, 4],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident repellat minus voluptas voluptatum eum. Architecto facilis beatae molestias quam dolor fuga blanditiis. Quod, blanditiis ad. Placeat sequi tempore ex laboriosam.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 2,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: 'blog-item-img-02.png',
        date: '25 October, 2022',
        tags: [1, 2, 5],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 3,
        title: 'Best For Any Office & Business Interior Solution',
        img: 'blog-item-img-03.png',
        date: '26 May, 2023 ',
        tags: [1, 6],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 4,
        title: 'Let’s Get Solution For Building Construction Work',
        img: 'blog-item-img-04.png',
        date: '4 June, 2023 ',
        tags: [2, 4],
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Парадигматическая продолжил lorem эта безорфографичный рекламных, себя возвращайся бросил одна пояс ipsum ручеек не всеми, лучше агентство свой первую страна.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 5,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: 'blog-item-img-05.png',
        date: '14 September, 2020 ',
        tags: [4, 5],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo autem deleniti perspiciatis, aspernatur iusto quos facere laudantium? Quas, repudiandae.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 6,
        title: 'Best For Any Office & Business Interior Solution',
        img: 'blog-item-img-06.png',
        date: '13 December, 2020 ',
        tags: [3, 6],
        text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил однажды собрал живет города, взгляд ему диких составитель буквенных!',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 7,
        title: 'Let’s Get Solution For Building Construction Work',
        img: 'blog-item-img-01.png',
        date: '22 December, 2021',
        tags: [1, 3],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident repellat minus voluptas voluptatum eum. Architecto facilis beatae molestias quam dolor fuga blanditiis. Quod, blanditiis ad. Placeat sequi tempore ex laboriosam.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 8,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: 'blog-item-img-02.png',
        date: '25 October, 2022',
        tags: [2, 3],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 9,
        title: 'Best For Any Office & Business Interior Solution',
        img: 'blog-item-img-03.png',
        date: '26 May, 2023 ',
        tags: [3, 6],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 10,
        title: 'Let’s Get Solution For Building Construction Work',
        img: 'blog-item-img-04.png',
        date: '4 June, 2023 ',
        tags: [3],
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Парадигматическая продолжил lorem эта безорфографичный рекламных, себя возвращайся бросил одна пояс ipsum ручеек не всеми, лучше агентство свой первую страна.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 11,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: 'blog-item-img-05.png',
        date: '14 September, 2020 ',
        tags: [1, 2],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo autem deleniti perspiciatis, aspernatur iusto quos facere laudantium? Quas, repudiandae.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 12,
        title: 'Best For Any Office & Business Interior Solution',
        img: 'blog-item-img-06.png',
        date: '13 December, 2023 ',
        tags: [5, 6],
        text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил однажды собрал живет города, взгляд ему диких составитель буквенных!',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 13,
        title: 'Let’s Get Solution For Building Construction Work',
        img: 'blog-item-img-01.png',
        date: '22 December, 2021',
        tags: [3, 5],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident repellat minus voluptas voluptatum eum. Architecto facilis beatae molestias quam dolor fuga blanditiis. Quod, blanditiis ad. Placeat sequi tempore ex laboriosam.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 14,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: 'blog-item-img-02.png',
        date: '25 October, 2022',
        tags: [1, 4],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 15,
        title: 'Best For Any Office & Business Interior Solution',
        img: 'blog-item-img-03.png',
        date: '26 May, 2023 ',
        tags: [2, 6],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 16,
        title: 'Let’s Get Solution For Building Construction Work',
        img: 'blog-item-img-04.png',
        date: '4 June, 2023 ',
        tags: [1, 5],
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Парадигматическая продолжил lorem эта безорфографичный рекламных, себя возвращайся бросил одна пояс ipsum ручеек не всеми, лучше агентство свой первую страна.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 17,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: 'blog-item-img-05.png',
        date: '14 September, 2020 ',
        tags: [2, 4, 5],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo autem deleniti perspiciatis, aspernatur iusto quos facere laudantium? Quas, repudiandae.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 18,
        title: 'Best For Any Office & Business Interior Solution',
        img: 'blog-item-img-06.png',
        date: '13 December, 2020 ',
        tags: [1, 2],
        text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил однажды собрал живет города, взгляд ему диких составитель буквенных!',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 19,
        title: 'Let’s Get Solution For Building Construction Work',
        img: 'blog-item-img-01.png',
        date: '22 December, 2021',
        tags: [1, 3, 4, 6],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident repellat minus voluptas voluptatum eum. Architecto facilis beatae molestias quam dolor fuga blanditiis. Quod, blanditiis ad. Placeat sequi tempore ex laboriosam.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 20,
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: 'blog-item-img-02.png',
        date: '25 October, 2022',
        tags: [3, 4],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
      {
        id: 21,
        title: 'Best For Any Office & Business Interior Solution',
        img: 'blog-item-img-03.png',
        date: '26 May, 2023 ',
        tags: [2, 4, 5],
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste. Ex labore omnis tempore consequuntur mollitia praesentium saepe aperiam atque! Doloribus reprehenderit explicabo iure accusantium. Pariatur vitae suscipit repudiandae neque.',
        breadcrumbs: ['interior', 'home', 'decor'],
      },
    ],
    tags: [
      { id: 1, name: 'kitchen', checked: false },
      { id: 2, name: 'bedroom', checked: false },
      { id: 3, name: 'building', checked: false },
      { id: 4, name: 'architecture', checked: false },
      { id: 5, name: 'kitchen planning', checked: false },
      { id: 6, name: 'bathroom', checked: false },
    ],
  },
  getters: {
    ARTICLES_BY_AMOUNT: (state) => (amount) => state.articles.slice(0, amount),
    ARTICLE_BY_ID: (state) => (id) =>
      state.articles.find((item) => item.id === id),
    ARTICLES_BY_TAG: (state) => (tagId) =>
      state.articles.filter((item) => item.tags.includes(tagId)),
    LATEST_ARTICLE: (state) => {
      let maxDate = new Date(state.articles[0].date);
      let maxDateIndex = 0;
      state.articles.forEach((item) => {
        let currentDate = new Date(item.date);
        if (currentDate > maxDate) {
          maxDate = currentDate;
          maxDateIndex = item.id;
        }
      });
      return store.getters.ARTICLE_BY_ID(maxDateIndex);
    },
    TAGS: (state) => state.tags,
  },
});

export default store;
