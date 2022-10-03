"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          title: "Woman jeans",
          available: true,
          price: 3,
          imageUrl:
            "https://image.made-in-china.com/202f0j00OKrVIFHcfygU/Good-Quality-Summer-Ladies-Pants-Mixed-Used-Clothes-Second-Hand-Clothing.jpg",
          category: "clothes",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dutch style bike",
          available: true,
          price: 30,
          imageUrl:
            "https://dutchreview.com/wp-content/uploads/conor-luddy-SHU4YVhTth8-unsplash.jpg",
          category: "bikes",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Leather jacket",
          available: false,
          price: 10,
          imageUrl:
            "https://d2j6dbq0eux0bg.cloudfront.net/images/11625199/2657695213.jpg",
          category: "clothes",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Jeep Toy",
          available: true,
          price: 20,
          imageUrl:
            "https://i.pinimg.com/736x/8e/8d/bb/8e8dbbcaff69665033256da6d0ce0c45--second-hand-the-boy.jpg",
          category: "toys",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Vitraux window",
          available: false,
          price: 35,
          imageUrl:
            "https://www.thejunkmap.com.au/wp-content/uploads/2017/10/Renovate-Restore-Recycle55.jpg",
          category: "furnitu.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "8 carpenter tools",
          available: true,
          price: 10,
          imageUrl:
            "https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/1979/01/22160904/old-tools.jpg",
          category: "tools",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Men shirt",
          available: true,
          price: 4,
          imageUrl:
            "https://static-01.daraz.com.bd/p/c09598c5ff416695b0f2db6ddebf0a75.jpg",
          category: "clothes",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Men shoes",
          available: true,
          price: 20,
          imageUrl:
            "https://www.aeclothing.net/wp-content/uploads/2016/05/second-hand-shoes.jpg",
          category: "shoes",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "All-star shoes",
          available: false,
          price: 10,
          imageUrl:
            "https://everydayrecycler.com/wp-content/uploads/2020/09/Old-Shoes.jpg",
          category: "shoes",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lady dress",
          available: true,
          price: 5,
          imageUrl:
            "https://images.selfridges.com/is/image/selfridges/R03630800_NAVY_M?$PDP_M_ZOOM$",
          category: "clothes",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Large vitraux window",
          available: false,
          price: 40,
          imageUrl:
            "https://artquid-art.imgix.net/2/83/152372.1403782030.1.o152038803.jpg?fit=max&w=575&border=0,00FF0000",
          category: "furnitu.",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dutch-style bike ",
          available: true,
          price: 25,
          imageUrl:
            "https://www.dutchworldbikes.com/wp-content/uploads/2020/05/black_grandma03.jpg",
          category: "bikes",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Harry Potther books",
          available: true,
          price: 5,
          imageUrl:
            "https://media.karousell.com/media/photos/products/2018/06/30/secondhand_harry_potter_full_collection_books_with_bookmark_1530339660_f785182c.jpg",
          category: "books",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "1984 - George Orwell",
          available: true,
          price: 2,
          imageUrl: "https://miro.medium.com/max/1400/0*5J4KhO56J8YEs_00",
          category: "books",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Old encyclopedia",
          available: true,
          price: 4,
          imageUrl:
            "https://images.livemint.com/img/2022/04/02/1200x900/old_leatherbound_books_Photo_by_Chris_Lawton_on_Unsplash_1648884412776_1648884423207.jpg",
          category: "books",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bakfiet",
          available: true,
          price: 50,
          imageUrl:
            "https://www.hazelhorst-tweewielers.nl/wp-content/uploads/2022/08/bakfiets-e1661000245128.jpg",
          category: "bikes",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
