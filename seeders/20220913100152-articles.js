"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "articles",
      [
        {
          title:
            "Sander van Kringloop Tilburg: 'A purchase is more unique here'",
          content: `Chairs, games, books, lounge sofas and jeans: the Kringloop Tilburg range is huge. But if you see something today, it may be sold tomorrow, according to thrift store owner Sander Geijs. “Things that are here now are on average gone within one or one and a half weeks. That is very fast.” “When I started Kringloop Tilburg ten years ago, I saw that we were all using a lot. Everything is replaced again and again: telephones every two years, while they are dying. laptop? Same story. And clothing is the best example. People buy so much clothing, sometimes they only wear it once and then hang it in the closet for years. That's just not okay," Sander thinks. “The real price is not being paid.”`,
          urlToImage:
            "https://media.indebuurt.nl/tilburg/2022/09/05170138/DSC_0773-1024x684.jpg",
          url: "https://indebuurt.nl/tilburg/bedrijvigheid/ondernemer-uitgelicht/sander-van-kringloop-tilburg-hier-is-een-aankoop-unieker~158171/",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "11 best vintage shops in Amsterdam",
          content: `Do you need something “new”? Tania Pescador, an environmentally conscious fashion & lifestyle blogger invites us to choose to buy pre-owned items to reduce the impact that fashion has on our planet. To make it easier, she shares her favourite shops with us. Amsterdam is a great place when it comes to vintage and second-hand shopping. From stores that offer very curated and handpicked collections, to flea markets where you need to dig deep to find that special garment.`,
          urlToImage:
            "https://www.iamexpat.nl/sites/default/files/styles/article_full_custom_user_full_hd_1x/public/vintage-shop.jpg",
          url: "https://www.iamexpat.nl/lifestyle/lifestyle-news/11-best-vintage-shops-amsterdam",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ETERNAL CIRCULAR ALUMINUM FAADES",
          content: `Making perpetually high-quality circular aluminum facades possible, that is the mission of the PerpetuAL feasibility study. The ambition is that this will lead to a halving of CO2 within seven years. The VMRG, the trade association for metal facade construction, together with 17 innovative partners, has been awarded a subsidy by RVO to carry out this feasibility study.The participating companies represent the complete circular cycle of facade construction, maintenance, urban mining, dismantling, reuse of facade parts, collection and separation, remelting and extrusion into circularly designed facade systems that can be returned to the facade. Together with knowledge institutions and knowledge and ICT partners, all have ambitious plans in terms of research and follow-up steps. VMRG is the secretary and coordinates this project together with Real Capital Sytems.`,
          urlToImage:
            "https://113.wpcdnnode.com/bouwmagazine.nl/wp-content/uploads/2022/09/b0d779fa-7dd8-4f97-9ae7-3796992a1c3e.jpg",
          url: "https://www.bouwmagazine.nl/eeuwigdurend-circulaire-aluminium-gevels-2/",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title:
            "Mission impossible: antique and charity stores have to register goods",
          content: `A new law to prevent dealing in stolen goods is set to cause chaos in the antique and thrift store world. Current affairs programme Nieuwsuur reports that a new digital register, being rolled out and run by local municipalities, is intended to dissuade thieves but is causing unnecessary bureaucracy. Roeland Kramer antique dealer at Kramer Kunst & Antiek in Amsterdam, said he would have to register hundreds of thousands of items including 6,000 antique bottles and 5,000 plates  each of which takes 10 minutes to picture, describe and register online.`,
          urlToImage:
            "https://faro.be/sites/default/files/styles/xlarge/public/u%5Buid%5D/kringloopwinkel.jpg?itok=k8E9E30r",
          url: "https://www.dutchnews.nl/news/2022/05/mission-impossible-antique-and-charity-stores-have-to-register-goods/",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Sander van Kringloop Tilburg: 'A purchase is more unique here'",
          content: `Chairs, games, books, lounge sofas and jeans: the Kringloop Tilburg range is huge. But if you see something today, it may be sold tomorrow, according to thrift store owner Sander Geijs. “Things that are here now are on average gone within one or one and a half weeks. That is very fast.” “When I started Kringloop Tilburg ten years ago, I saw that we were all using a lot. Everything is replaced again and again: telephones every two years, while they are dying. laptop? Same story. And clothing is the best example. People buy so much clothing, sometimes they only wear it once and then hang it in the closet for years. That's just not okay," Sander thinks. “The real price is not being paid.”`,
          urlToImage:
            "https://media.indebuurt.nl/tilburg/2022/09/05170138/DSC_0773-1024x684.jpg",
          url: "https://indebuurt.nl/tilburg/bedrijvigheid/ondernemer-uitgelicht/sander-van-kringloop-tilburg-hier-is-een-aankoop-unieker~158171/",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "11 best vintage shops in Amsterdam",
          content: `Do you need something “new”? Tania Pescador, an environmentally conscious fashion & lifestyle blogger invites us to choose to buy pre-owned items to reduce the impact that fashion has on our planet. To make it easier, she shares her favourite shops with us. Amsterdam is a great place when it comes to vintage and second-hand shopping. From stores that offer very curated and handpicked collections, to flea markets where you need to dig deep to find that special garment.`,
          urlToImage:
            "https://www.iamexpat.nl/sites/default/files/styles/article_full_custom_user_full_hd_1x/public/vintage-shop.jpg",
          url: "https://www.iamexpat.nl/lifestyle/lifestyle-news/11-best-vintage-shops-amsterdam",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ETERNAL CIRCULAR ALUMINUM FAADES",
          content: `Making perpetually high-quality circular aluminum facades possible, that is the mission of the PerpetuAL feasibility study. The ambition is that this will lead to a halving of CO2 within seven years. The VMRG, the trade association for metal facade construction, together with 17 innovative partners, has been awarded a subsidy by RVO to carry out this feasibility study.The participating companies represent the complete circular cycle of facade construction, maintenance, urban mining, dismantling, reuse of facade parts, collection and separation, remelting and extrusion into circularly designed facade systems that can be returned to the facade. Together with knowledge institutions and knowledge and ICT partners, all have ambitious plans in terms of research and follow-up steps. VMRG is the secretary and coordinates this project together with Real Capital Sytems.`,
          urlToImage:
            "https://113.wpcdnnode.com/bouwmagazine.nl/wp-content/uploads/2022/09/b0d779fa-7dd8-4f97-9ae7-3796992a1c3e.jpg",
          url: "https://www.bouwmagazine.nl/eeuwigdurend-circulaire-aluminium-gevels-2/",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title:
            "Mission impossible: antique and charity stores have to register goods",
          content: `A new law to prevent dealing in stolen goods is set to cause chaos in the antique and thrift store world. Current affairs programme Nieuwsuur reports that a new digital register, being rolled out and run by local municipalities, is intended to dissuade thieves but is causing unnecessary bureaucracy. Roeland Kramer antique dealer at Kramer Kunst & Antiek in Amsterdam, said he would have to register hundreds of thousands of items including 6,000 antique bottles and 5,000 plates  each of which takes 10 minutes to picture, describe and register online.`,
          urlToImage:
            "https://faro.be/sites/default/files/styles/xlarge/public/u%5Buid%5D/kringloopwinkel.jpg?itok=k8E9E30r",
          url: "https://www.dutchnews.nl/news/2022/05/mission-impossible-antique-and-charity-stores-have-to-register-goods/",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("articles", null, {});
  },
};

// npx sequelize-cli migration:generate --name articles-relations
