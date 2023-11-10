# Clothing-Store
[Demo](https://www.youtube.com/watch?v=ijAHOyyFzKE)
## General info:

This is a simple clothing store application in which the user can browse offers. Currently, anyone can add a new product to the store, but over time the application will have a user profile from which adding a product will only be possible for a person with administrator rights.
## Technologies:

- [Node.js](https://nodejs.org/en/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Express.js](https://expressjs.com/)
- [Jest](https://jestjs.io/docs/getting-started)

## Download in your desktop

**!!!Attention!!!** For the application to function fully, you need a fully configured database and a folder with the [frontend](https://github.com/Insterek/ShopMegaK-FE.git) part

- Open command line (cmd) and paste this line

```bash
git clone https://github.com/Insterek/ShopMegaK-BE.git
```

- Then find the folder in your desktop ShopMegaK-BE and open it with your editor(VSC,Webstorm or others).
- In the editor terminal, enter the command below
  or enable it using the scripts located in the lower left corner and the application will open in your browser

```bash
npm start
```

## Bibliography

- https://pixabay.com/pl/

## Setup database

- Database

```bash
CREATE DATABASE IF NOT EXISTS `clothing_shop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `clothing_shop`;
```

- First table

```bash
CREATE TABLE IF NOT EXISTS `ad_product` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `img_url` varchar(2082) NOT NULL,
  `price` decimal(6,2) NOT NULL DEFAULT 0.00,
  `category` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

- Second table

```bash
CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `login` varchar(24) NOT NULL,
  `password` varchar(500) NOT NULL,
  `email` varchar(345) NOT NULL,
  `permision` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

- Ready-made products for the database:

```bash
INSERT INTO `ad_product` (`id`, `title`, `description`, `img_url`, `price`, `category`) VALUES
	('0da8bb0b-6b85-417d-a70e-bd853c307ee8', 'Gold Bracelet', 'To sure calm much most long me mean. Able rent long in do we. Uncommonly no it announcing melancholy an in. Mirth learn it he given. Secure shy favour length all twenty denote. He felicity no an at packages answered opinions juvenile.', 'https://cdn.pixabay.com/photo/2015/03/09/14/03/gold-665722_1280.jpg', 35.00, 'accessories'),
	('20846bb3-e717-4c9f-8f91-97ae2e7a946b', 'Heels', 'By so delight of showing neither believe he present. Deal sigh up in shew away when. Pursuit express no or prepare replied. Wholly formed old latter future but way she. Day her likewise smallest expenses judgment building man carriage gay. Considered introduced themselves mr to discretion at. Means among saw hopes for. Death mirth in oh learn he equal on.', 'https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496_1280.jpg', 13.00, 'footwear'),
	('353ac7e5-9de8-4b10-8f86-919d9e963ed8', 'Jeans pants', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://cdn.pixabay.com/photo/2016/09/14/23/37/man-1670776_1280.jpg', 15.00, 'men'),
	('42c82e2a-7741-402b-8f81-d1c2734e8114', 'Hoodie', 'Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression. Almost unable put piqued talked likely houses her met. Met any nor may through resolve entered. An mr cause tried oh do shade happy.', 'https://cdn.pixabay.com/photo/2023/10/21/20/46/ai-generated-8332610_1280.jpg', 19.00, 'woman'),
	('48bcda4e-9809-43d8-8c81-daecff46f004', 'Bracelet', 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship.', 'https://cdn.pixabay.com/photo/2015/03/13/14/44/bracelet-671791_1280.jpg', 12.00, 'accessories'),
	('4afc8ff3-cc8c-40db-a4b6-d3aafaebe396', 'Leather jacket', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://cdn.pixabay.com/photo/2023/07/31/07/47/leather-jacket-8160456_1280.jpg', 25.00, 'woman'),
	('4c538a56-eb5c-4fd8-9da1-ebeebf796e6f', 'Cap', 'In entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough points. Miles at smart no marry whole linen mr. Income joy nor can wisdom summer. Extremely depending he gentleman improving intention rapturous as.', 'https://cdn.pixabay.com/photo/2012/09/04/21/13/man-56087_1280.jpg', 8.00, 'accessories'),
	('52152326-f89a-49d8-89bd-0a8e13f7067f', 'Men shorts', 'As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant expense. Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance up..', 'https://cdn.pixabay.com/photo/2018/08/08/16/37/glasses-3592607_1280.jpg', 10.00, 'men'),
	('56d06c02-f48d-4f99-be2e-3f4ba7a88115', 'Autumn shoes', 'Although moreover mistaken kindness me feelings do be marianne. Son over own nay with tell they cold upon are. Cordial village and settled she ability law herself. Finished why bringing but sir bachelor unpacked any thoughts. Unpleasing unsatiable particular inquietude did nor sir. Get his declared appetite distance his together now families. Friends am himself at on norland it viewing. Suspected elsewhere you belonging continued commanded she.', 'https://cdn.pixabay.com/photo/2018/12/10/21/34/winter-boots-3867776_1280.jpg', 11.00, 'footwear'),
	('5f891e09-3ccf-4e2c-9406-9217a673fc74', 'Cap', 'Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets enabled. To an occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten you the weather ferrars venture friends. Solid visit seems again you nor all.', 'https://cdn.pixabay.com/photo/2012/11/22/06/49/man-66941_1280.jpg', 7.00, 'accessories'),
	('69b095cc-4793-48a5-8564-33a61d171aa2', 'Nike Jordan 1', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.', 'https://cdn.pixabay.com/photo/2020/07/19/05/31/nike-5418992_1280.jpg', 3.00, 'footwear'),
	('87ecaa84-5753-44f0-b56a-bf5fdd04fd32', 'Jeans pants', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', 'https://cdn.pixabay.com/photo/2017/08/01/14/43/people-2565966_1280.jpg', 18.00, 'woman'),
	('ac54ea1c-4140-4f36-b8dd-349298d59a08', 'Woman shorts', 'Feet evil to hold long he open knew an no. Apartments occasional boisterous as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated my everything it literature. Greatly explain attempt perhaps in feeling he. House men taste bed not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical.', 'https://cdn.pixabay.com/photo/2020/01/07/06/27/sexy-4746858_1280.jpg', 12.00, 'woman'),
	('b2d6bb56-fda3-454c-aa76-3eff84a7e890', 'Sunglasses', 'Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.', 'https://cdn.pixabay.com/photo/2019/04/16/21/08/man-4132758_1280.jpg', 4.00, 'accessories'),
	('b7831843-7cd0-476e-821f-cccf46c0f96e', 'Sunglasses', 'Depart do be so he enough talent. Sociable formerly six but handsome. Up do view time they shot. He concluded disposing provision by questions as situation. Its estimating are motionless day sentiments end. Calling an imagine at forbade. At name no an what like spot. Pressed my by do affixed he studied.', 'https://cdn.pixabay.com/photo/2016/11/29/11/09/woman-1869116_1280.jpg', 4.00, 'accessories'),
	('c1bd2db4-2bb4-467e-8247-9aa29719da76', 'Nike shoes', 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.', 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg', 12.00, 'footwear'),
	('c7e905ef-79e6-449b-b850-37363e9e0caf', 'Nike', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.', 'https://cdn.pixabay.com/photo/2020/04/14/09/53/nike-5041718_1280.jpg', 33.00, 'footwear'),
	('ed93c66a-4efd-4749-8882-f670ad8e1421', 'Bracelet', 'Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in. Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment. Passage weather as up am exposed. And natural related man subject. Eagerness get situation his was delighted.', 'https://cdn.pixabay.com/photo/2013/07/11/15/22/bracelet-144646_1280.jpg', 12.00, 'accessories'),
	('ee22c9e1-4a9b-4e92-9df4-5f7d7985fecf', 'Sunglasses', 'Unwilling sportsmen he in questions september therefore described so. Attacks may set few believe moments was. Reasonably how possession shy way introduced age inquietude. Missed he engage no exeter of. Still tried means we aware order among on. Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking.', 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg', 3.00, 'accessories'),
	('f2f2c979-87ce-4905-91a6-f62e44eaea83', 'Leather jacket', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', 'https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg', 27.00, 'men'),
	('fbe11651-170e-40da-9935-b6f4b7ba8900', 'Hoodie', 'Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new.', 'https://cdn.pixabay.com/photo/2020/01/08/03/54/sunglasses-4749213_1280.jpg', 16.00, 'men');
```
