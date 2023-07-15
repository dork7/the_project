const SHOP_DATA = [
    {
        title: 'Hats',
        items: [
            {
                id: 1,
                productName: 'Brown Brim',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 25,
            },
            {
                id: 2,
                productName: 'Blue Beanie',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 18,
            },
            {
                id: 3,
                productName: 'Brown Cowboy',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 35,
            },
            {
                id: 4,
                productName: 'Grey Brim',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 25,
            },
            {
                id: 5,
                productName: 'Green Beanie',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 18,
            },
            {
                id: 6,
                productName: 'Palm Tree Cap',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 14,
            },
            {
                id: 7,
                productName: 'Red Beanie',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 18,
            },
            {
                id: 8,
                productName: 'Wolf Cap',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 14,
            },
            {
                id: 9,
                productName: 'Blue Snapback',
                imageUrl: 'https://www.irreverentgent.com/wp-content/uploads/2021/02/Types-of-Mens-Hats-Banner.jpg',
                price: 16,
            },
        ],
    },
    {
        title: 'Sneakers',
        items: [
            {
                id: 10,
                productName: 'Adidas NMD',
                imageUrl: 'https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg',
                price: 220,
            },
            {
                id: 11,
                productName: 'Adidas Yeezy',
                imageUrl: 'https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg',
                price: 280,
            },
            {
                id: 12,
                productName: 'Black Converse',
                imageUrl: 'https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg',
                price: 110,
            },
            {
                id: 13,
                productName: 'Nike White AirForce',
                imageUrl: 'https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg',
                price: 160,
            },
            {
                id: 14,
                productName: 'Nike Red High Tops',
                imageUrl: 'https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg',
                price: 160,
            },
            {
                id: 15,
                productName: 'Nike Brown High Tops',
                imageUrl: 'https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg',
                price: 160,
            },
            {
                id: 16,
                productName: 'Air Jordan Limited',
                imageUrl: 'https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg',
                price: 190,
            },
            {
                id: 17,
                productName: 'Timberlands',
                imageUrl: 'https://media.vogue.fr/photos/5d40515bc93b83000833392f/16:9/w_1280,c_limit/020-Sneakers-Encyclopaedia-Vogueint-Jul24-Getty-Images.jpg',
                price: 200,
            },
        ],
    },
    {
        title: 'Jackets',
        items: [
            {
                id: 18,
                productName: 'Black Jean Shearling',
                imageUrl: 'https://allensolly.abfrl.in/blog/wp-content/uploads/2022/07/Jacket.jpg',
                price: 125,
            },
            {
                id: 19,
                productName: 'Blue Jean Jacket',
                imageUrl: 'https://allensolly.abfrl.in/blog/wp-content/uploads/2022/07/Jacket.jpg',
                price: 90,
            },
            {
                id: 20,
                productName: 'Grey Jean Jacket',
                imageUrl: 'https://allensolly.abfrl.in/blog/wp-content/uploads/2022/07/Jacket.jpg',
                price: 90,
            },
            {
                id: 21,
                productName: 'Brown Shearling',
                imageUrl: 'https://allensolly.abfrl.in/blog/wp-content/uploads/2022/07/Jacket.jpg',
                price: 165,
            },
            {
                id: 22,
                productName: 'Tan Trench',
                imageUrl: 'https://allensolly.abfrl.in/blog/wp-content/uploads/2022/07/Jacket.jpg',
                price: 185,
            },
        ],
    },
    {
        title: 'Womens',
        items: [
            {
                id: 23,
                productName: 'Blue Tanktop',
                imageUrl: 'https://images.ctfassets.net/wl6q2in9o7k3/4YlnKlAdosi3v4dwNTz372/174a1a4997f002c29854edb1ace3aa29/GY79418_LCY-002_Web_Banner_Desktop_3800x1700px_6.jpg?w=3840&q=90',
                price: 25,
            },
            {
                id: 24,
                productName: 'Floral Blouse',
                imageUrl: 'https://images.ctfassets.net/wl6q2in9o7k3/4YlnKlAdosi3v4dwNTz372/174a1a4997f002c29854edb1ace3aa29/GY79418_LCY-002_Web_Banner_Desktop_3800x1700px_6.jpg?w=3840&q=90',
                price: 20,
            },
            {
                id: 25,
                productName: 'Floral Dress',
                imageUrl: 'https://images.ctfassets.net/wl6q2in9o7k3/4YlnKlAdosi3v4dwNTz372/174a1a4997f002c29854edb1ace3aa29/GY79418_LCY-002_Web_Banner_Desktop_3800x1700px_6.jpg?w=3840&q=90',
                price: 80,
            },
            {
                id: 26,
                productName: 'Red Dots Dress',
                imageUrl: 'https://images.ctfassets.net/wl6q2in9o7k3/4YlnKlAdosi3v4dwNTz372/174a1a4997f002c29854edb1ace3aa29/GY79418_LCY-002_Web_Banner_Desktop_3800x1700px_6.jpg?w=3840&q=90',
                price: 80,
            },
            {
                id: 27,
                productName: 'Striped Sweater',
                imageUrl: 'https://images.ctfassets.net/wl6q2in9o7k3/4YlnKlAdosi3v4dwNTz372/174a1a4997f002c29854edb1ace3aa29/GY79418_LCY-002_Web_Banner_Desktop_3800x1700px_6.jpg?w=3840&q=90',
                price: 45,
            },
            {
                id: 28,
                productName: 'Yellow Track Suit',
                imageUrl: 'https://images.ctfassets.net/wl6q2in9o7k3/4YlnKlAdosi3v4dwNTz372/174a1a4997f002c29854edb1ace3aa29/GY79418_LCY-002_Web_Banner_Desktop_3800x1700px_6.jpg?w=3840&q=90',
                price: 135,
            },
            {
                id: 29,
                productName: 'White Blouse',
                imageUrl: 'https://images.ctfassets.net/wl6q2in9o7k3/4YlnKlAdosi3v4dwNTz372/174a1a4997f002c29854edb1ace3aa29/GY79418_LCY-002_Web_Banner_Desktop_3800x1700px_6.jpg?w=3840&q=90',
                price: 20,
            },
        ],
    },
    {
        title: 'Mens',
        items: [
            {
                id: 30,
                productName: 'Camo Down Vest',
                imageUrl: 'https://static.wixstatic.com/media/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg/v1/fill/w_1480,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg',
                price: 325,
            },
            {
                id: 31,
                productName: 'Floral T-shirt',
                imageUrl: 'https://static.wixstatic.com/media/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg/v1/fill/w_1480,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg',
                price: 20,
            },
            {
                id: 32,
                productName: 'Black & White Longsleeve',
                imageUrl: 'https://static.wixstatic.com/media/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg/v1/fill/w_1480,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg',
                price: 25,
            },
            {
                id: 33,
                productName: 'Pink T-shirt',
                imageUrl: 'https://static.wixstatic.com/media/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg/v1/fill/w_1480,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg',
                price: 25,
            },
            {
                id: 34,
                productName: 'Jean Long Sleeve',
                imageUrl: 'https://static.wixstatic.com/media/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg/v1/fill/w_1480,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg',
                price: 40,
            },
            {
                id: 35,
                productName: 'Burgundy T-shirt',
                imageUrl: 'https://static.wixstatic.com/media/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg/v1/fill/w_1480,h_1168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/045ee3_41d3828863364f46a3f5aa268330b4cf~mv2.jpg',
                price: 25,
            },
        ],
    },
];

export default SHOP_DATA