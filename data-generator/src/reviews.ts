import { random, lorem } from 'faker/locale/en';
import { subDays, isAfter } from 'date-fns';

import { randomDate, weightedArrayElement, weightedBoolean } from './utils';
import type { Db } from './types';

export const generateReviews = (db: Db): Review[] => {
    // const today = new Date();
    // const aMonthAgo = subDays(today, 30);
    //
    // let id = 0;
    // const reviewers = db.customers
    //     .filter(customer => customer.has_ordered)
    //     .filter(() => weightedBoolean(60)) // only 60% of buyers write reviews
    //     .map(customer => customer.id);

    // let result = db.orders
    //     .filter(order => reviewers.indexOf(order.customer_id) !== -1)
    //     .reduce(
    //         (acc, order) => [
    //             ...acc,
    //             ...order.basket
    //                 .filter(() => weightedBoolean(40)) // reviewers review 40% of their products
    //                 .map(product => {
    //                     const date = randomDate(order.date);
    //                     const status = isAfter(aMonthAgo, date)
    //                         ? weightedArrayElement(
    //                             ['accepted', 'rejected'],
    //                             [3, 1]
    //                         )
    //                         : weightedArrayElement(
    //                             ['pending', 'accepted', 'rejected'],
    //                             [5, 3, 1]
    //                         );
    //
    //                     return {
    //                         id: id++,
    //                         date: date.toISOString(),
    //                         status: status,
    //                         order_id: order.id,
    //                         product_id: product.product_id,
    //                         customer_id: order.customer_id,
    //                         rating: random.number({ min: 1, max: 5 }),
    //                         comment: Array.apply(
    //                             null,
    //                             Array(random.number({ min: 1, max: 5 }))
    //                         )
    //                             .map(() => lorem.sentences())
    //                             .join('\n \r'),
    //                     };
    //                 }),
    //         ],
    //         []
    //     );

    let result: Review[] = [
        {
            "id": 0,
            "date": "2024-04-20T05:21:00.785Z",
            "status": "rejected",
            "order_id": 0,
            "product_id": 110,
            "customer_id": 27,
            "rating": 5,
            "comment": "Quos reiciendis dignissimos. Iure reprehenderit libero eum omnis possimus. Et odio dolor nemo molestiae expedita. Ad nisi maxime placeat corporis. Esse laudantium autem ad ut quo sunt distinctio.\n \rConsectetur voluptas autem dolorum voluptas repudiandae repellendus non. Et esse est ipsum assumenda optio.\n \rMolestias facere a ipsa cupiditate reprehenderit. Doloremque similique non alias esse saepe. Id corrupti dignissimos voluptatum aperiam perferendis autem aut iure dolorum. Distinctio consequatur beatae corrupti corporis reiciendis quidem et totam error.\n \rIncidunt voluptate est nobis enim quod cumque praesentium delectus. Ut illum et temporibus at unde a aut commodi."
        },
        {
            "id": 1,
            "date": "2023-10-30T18:46:34.011Z",
            "status": "rejected",
            "order_id": 3,
            "product_id": 11,
            "customer_id": 27,
            "rating": 1,
            "comment": "Reprehenderit ut natus quia illum provident nulla ipsum dolor. Ut aut officiis cum. Consectetur quo vel recusandae magnam eum distinctio. Autem quia voluptatem quidem nulla repellendus.\n \rEt impedit velit. Perferendis sunt possimus fugit voluptatum. Omnis ullam consequatur consequatur."
        },
        {
            "id": 2,
            "date": "2024-08-23T00:22:15.825Z",
            "status": "accepted",
            "order_id": 4,
            "product_id": 75,
            "customer_id": 30,
            "rating": 1,
            "comment": "Voluptatem eos officia architecto quo et perspiciatis et. Voluptatem quaerat quis aspernatur ut neque.\n \rTotam non et veritatis nobis assumenda neque accusantium. Facilis soluta non alias.\n \rMagnam rerum magni. Error omnis unde fugiat at odio fugit nostrum ducimus hic. Porro sequi aut officiis rerum sunt eveniet sit voluptatibus. Voluptas in autem voluptatem voluptas magnam. Id ipsum velit. In ipsum necessitatibus sunt eveniet aut veritatis."
        },
        {
            "id": 3,
            "date": "2023-12-29T04:43:12.349Z",
            "status": "accepted",
            "order_id": 8,
            "product_id": 106,
            "customer_id": 55,
            "rating": 3,
            "comment": "Doloremque delectus in ipsa. Et nesciunt aliquam et. Mollitia ea ipsam repudiandae ut dolores quisquam.\n \rDolores repudiandae quo. Deserunt temporibus occaecati odio. Adipisci id dicta quia accusamus aliquam. Cum minima libero quis similique.\n \rEt eos quos non magni. Recusandae dicta maxime sed hic sunt id facilis nisi inventore. Dolores explicabo nihil iure deserunt id sapiente.\n \rOfficiis ut doloremque beatae repudiandae molestiae qui omnis. Est et velit culpa qui. Natus deserunt cum voluptatem illum id doloremque aspernatur sit."
        },
        {
            "id": 4,
            "date": "2024-06-30T21:58:10.151Z",
            "status": "accepted",
            "order_id": 11,
            "product_id": 18,
            "customer_id": 67,
            "rating": 2,
            "comment": "Voluptatem quibusdam deserunt sequi quae ut laborum minima. Autem magni libero necessitatibus non facere voluptatem. Ab vel corporis rerum. Quis dolorem impedit dolores unde minus dignissimos quo. Molestias veritatis explicabo. Mollitia ipsam rerum mollitia quis."
        },
        {
            "id": 5,
            "date": "2024-05-29T06:27:15.100Z",
            "status": "accepted",
            "order_id": 12,
            "product_id": 91,
            "customer_id": 30,
            "rating": 5,
            "comment": "Numquam sed velit quo culpa dolor nihil dicta commodi. Est ullam enim a voluptas aspernatur. Quidem voluptatem cum omnis. Labore eveniet aliquid rerum. Quis illo est consequuntur aut ex. Dolores ipsum hic sunt quidem et est.\n \rDebitis aut vel illo non quia et eum et. Error quidem totam temporibus rerum et voluptas iure quod accusamus. Ducimus veniam ratione. Et quas possimus repellat sunt laborum corporis voluptatem ut. Animi et voluptatibus sint recusandae eos reprehenderit nisi libero. Quisquam et labore et."
        },
        {
            "id": 6,
            "date": "2024-06-10T22:22:32.330Z",
            "status": "rejected",
            "order_id": 12,
            "product_id": 24,
            "customer_id": 30,
            "rating": 4,
            "comment": "Ex adipisci sint magnam. Debitis exercitationem quia omnis at aliquam tempore aut qui.\n \rId necessitatibus ut autem rerum. Omnis rem facilis nisi qui tempore amet.\n \rModi cumque voluptatum beatae. Saepe eos necessitatibus. Fugiat tempora ex dignissimos velit voluptas. Velit ad odio consectetur iste beatae. Nihil in sed quo enim et. Ducimus consequatur eveniet omnis."
        },
        {
            "id": 7,
            "date": "2024-05-29T01:43:38.958Z",
            "status": "accepted",
            "order_id": 13,
            "product_id": 114,
            "customer_id": 59,
            "rating": 3,
            "comment": "Dolor voluptates sunt non in. Quo inventore quibusdam. Ut labore consequatur dolorem dolores suscipit qui. Autem qui et delectus ut in. Porro provident quae voluptatem sed ullam est nihil.\n \rIncidunt est voluptatem blanditiis necessitatibus. Qui et cupiditate corrupti. Qui ex eos in quam voluptatibus quia id.\n \rDeleniti laudantium qui distinctio ullam beatae voluptas. Et ipsum iure et culpa. Hic laudantium placeat eos minus. Architecto voluptas sit veritatis modi nemo. Dolor dolorum iste ut quo molestiae blanditiis velit. Quis quod vitae est beatae sed illo aut."
        },
        {
            "id": 8,
            "date": "2024-06-22T00:03:58.071Z",
            "status": "accepted",
            "order_id": 13,
            "product_id": 124,
            "customer_id": 59,
            "rating": 2,
            "comment": "Repellat tempora odio quos atque ea. Velit ut in rem iste. Libero ut ut consequatur ducimus et beatae accusamus quas. Facere perferendis ipsum ipsum amet ut."
        },
        {
            "id": 9,
            "date": "2023-11-23T08:02:54.698Z",
            "status": "accepted",
            "order_id": 13,
            "product_id": 17,
            "customer_id": 59,
            "rating": 3,
            "comment": "Et eum rem nobis aut iste distinctio et molestias perspiciatis. Dolorem recusandae optio repudiandae.\n \rEt quas libero facilis at qui voluptatem provident velit. Excepturi voluptatibus commodi saepe ex qui nostrum dolor nihil dolorum. Beatae est optio rerum vitae assumenda temporibus doloremque voluptas.\n \rNecessitatibus blanditiis aut qui odio commodi nesciunt provident deserunt quam. Pariatur provident velit."
        },
        {
            "id": 10,
            "date": "2024-04-28T06:14:15.377Z",
            "status": "accepted",
            "order_id": 13,
            "product_id": 35,
            "customer_id": 59,
            "rating": 1,
            "comment": "Sed sint et officia repellendus. Ex numquam necessitatibus ipsum quisquam odit accusantium voluptatem. Beatae pariatur rerum in odio. Quod iure molestiae in iste ut.\n \rNobis omnis rerum fuga voluptatem. Aspernatur soluta laboriosam velit. Perferendis voluptatem ut eaque velit amet et. Libero quaerat omnis voluptas. Eum eaque ullam rerum a libero velit inventore aut.\n \rIure enim autem. Consectetur porro eveniet possimus sint eum aliquam."
        },
        {
            "id": 11,
            "date": "2024-08-03T07:46:20.281Z",
            "status": "pending",
            "order_id": 14,
            "product_id": 17,
            "customer_id": 30,
            "rating": 2,
            "comment": "Corporis explicabo numquam ut neque sunt et fugit recusandae. Ducimus tempora dolor non iure aut temporibus reiciendis rem sit.\n \rPossimus architecto aut facilis expedita. Ut et voluptatibus voluptatem ea facere.\n \rQui suscipit veritatis numquam ut. Possimus quidem sed non dolorem sunt omnis perspiciatis accusamus ut. Quos tempore ipsam dolorum. Dolor ut a optio culpa nihil.\n \rQuis deserunt perspiciatis tempora fugiat qui sed magni. Fuga natus sunt perspiciatis.\n \rEt culpa molestias esse velit est aspernatur qui dolor. Et est perspiciatis aut. Quae molestiae sit sunt. Libero doloribus porro sit. Aperiam iste rem quo. Qui quas et quo deleniti sed id reiciendis praesentium."
        },
        {
            "id": 12,
            "date": "2024-06-06T16:26:51.708Z",
            "status": "rejected",
            "order_id": 17,
            "product_id": 39,
            "customer_id": 30,
            "rating": 5,
            "comment": "Blanditiis pariatur mollitia. Ad et voluptas sed accusamus aut voluptatem molestiae hic ea. Sed rerum id maiores quae. Fugit pariatur voluptatem id harum eum. Reprehenderit explicabo ullam. Architecto quisquam inventore dolore.\n \rQui magni voluptate excepturi ratione in quo recusandae. Ipsa ut enim dolorum sunt fuga voluptas iusto. Rerum aspernatur qui et non atque. Quia dignissimos illum aliquid autem autem hic consectetur consequatur. Ut molestiae qui incidunt.\n \rQuidem error sequi harum. Nostrum sapiente voluptate facilis omnis. Earum molestias quia ea consectetur. Error est odit consequatur. Earum sed eum et vitae porro sed ut illo. Voluptatem aut quaerat necessitatibus."
        },
        {
            "id": 13,
            "date": "2024-07-30T05:04:13.481Z",
            "status": "rejected",
            "order_id": 18,
            "product_id": 104,
            "customer_id": 5,
            "rating": 3,
            "comment": "Et dignissimos dolorem sed repellendus quidem. Cupiditate saepe possimus et. Non tenetur ea.\n \rIncidunt saepe neque saepe. Aut sit a ipsam numquam.\n \rRem nisi nostrum est est commodi repellat. Occaecati cumque illum. Voluptatum omnis temporibus voluptates illo."
        },
        {
            "id": 14,
            "date": "2024-08-08T12:05:46.224Z",
            "status": "pending",
            "order_id": 22,
            "product_id": 29,
            "customer_id": 5,
            "rating": 4,
            "comment": "Soluta et incidunt adipisci consequatur aut aut tempora. Eius aperiam ea sit suscipit error voluptatem. Excepturi qui cum quis voluptas placeat provident in debitis. Quae qui et possimus quo perspiciatis.\n \rNulla autem ullam odit reiciendis. Eius enim qui at delectus. Deleniti laboriosam beatae nihil dolor omnis autem consequatur commodi ab.\n \rMaiores voluptas et rerum sapiente neque tempore ut eos commodi. Molestiae eaque id vel voluptatibus dolorem saepe. Libero ipsam et omnis rerum suscipit exercitationem sed. Odio nisi rerum est ipsum consequatur. Delectus quam sequi laborum ea inventore cum neque est eos.\n \rBeatae qui et nesciunt quaerat et molestias quia ad ut. Distinctio modi qui doloremque voluptatem quia nobis dolorem eaque laborum.\n \rQuisquam explicabo repellendus tenetur pariatur voluptates voluptatum qui sint ut. Maiores quis ut sed asperiores voluptas sunt itaque. Aliquid vitae et recusandae sit voluptas et eius vel hic. Sed architecto vero nihil qui enim assumenda quisquam. Reprehenderit alias libero qui ipsam ut odio nihil iusto. Deleniti voluptatem nihil."
        },
        {
            "id": 15,
            "date": "2024-06-02T15:17:45.386Z",
            "status": "accepted",
            "order_id": 25,
            "product_id": 10,
            "customer_id": 30,
            "rating": 4,
            "comment": "Incidunt exercitationem voluptas totam atque eligendi. Cumque consequuntur ullam et adipisci aut."
        },
        {
            "id": 16,
            "date": "2024-02-15T01:26:00.223Z",
            "status": "accepted",
            "order_id": 26,
            "product_id": 79,
            "customer_id": 59,
            "rating": 2,
            "comment": "Reiciendis dignissimos minus sunt. Sed debitis tempore et deserunt consectetur facilis voluptatem ducimus voluptatem. Voluptate porro unde est aspernatur vel. Tenetur eum suscipit quasi labore sint explicabo ut. Facilis quidem quis sed iusto ut blanditiis sint quia.\n \rAspernatur asperiores omnis impedit saepe. Soluta reiciendis voluptate quis molestias. Expedita quis eveniet sint similique. Reprehenderit quod rerum veniam rerum. Voluptatem atque sunt in aut.\n \rNatus quisquam quia et fugit ut quos. Velit in ea quam ut. Sint non deleniti molestiae pariatur laboriosam doloremque dolore et. Placeat et voluptas et veritatis at et iusto reprehenderit sint. At dolores qui optio maxime sint eum. Harum delectus qui praesentium laudantium voluptas autem ipsum.\n \rBeatae quae aliquid reiciendis ipsa. Et est culpa error hic dolorem eum minus at et. Possimus dolores et.\n \rAnimi et ipsam est alias delectus unde. Et assumenda dolores voluptatibus maiores accusantium omnis minus."
        },
        {
            "id": 17,
            "date": "2024-08-31T03:03:27.076Z",
            "status": "pending",
            "order_id": 26,
            "product_id": 72,
            "customer_id": 59,
            "rating": 3,
            "comment": "Omnis iusto vitae ut aut qui qui. Molestiae in nam doloremque occaecati ut. Laboriosam est sint adipisci. Sit et minus provident possimus est dolores.\n \rAutem doloribus voluptatum sed delectus est. Error et cupiditate architecto harum nostrum ut. Dolorem ipsum aut placeat cum aut aut. Ipsa a temporibus hic."
        },
        {
            "id": 18,
            "date": "2024-08-10T08:40:18.039Z",
            "status": "accepted",
            "order_id": 27,
            "product_id": 46,
            "customer_id": 76,
            "rating": 4,
            "comment": "Autem accusantium repellat. Voluptatibus est rerum.\n \rLibero eveniet et beatae quia ducimus et eos. Dolor et repudiandae aut cum quae in quae. Ad et dolorum doloribus non sint dolore. In libero facere nobis adipisci dolor. Iure tempora ut non sit repellat quidem at qui.\n \rDelectus minus fugit quia ut ex dolores cupiditate. Et nobis quis possimus ullam voluptate. Sed illum quasi aliquam vel. Sed cum aut neque nemo mollitia quam praesentium deserunt.\n \rDelectus et molestiae sequi est ad consequatur iure nobis. Corporis quos et odio eligendi recusandae velit aut. Id necessitatibus voluptas iusto perferendis suscipit inventore amet autem rerum. Excepturi sunt nostrum quis unde perspiciatis consequatur delectus omnis. Est cum dignissimos fugiat beatae aut amet.\n \rItaque officia debitis vitae. Quae et ut officiis saepe necessitatibus occaecati saepe tenetur vero."
        },
        {
            "id": 19,
            "date": "2024-07-08T23:34:19.440Z",
            "status": "accepted",
            "order_id": 27,
            "product_id": 64,
            "customer_id": 76,
            "rating": 3,
            "comment": "Est accusamus ad consequuntur sed dolor recusandae. Perferendis odit sapiente voluptate ab veritatis.\n \rOptio non et ipsam id ducimus. Blanditiis est quis mollitia eos exercitationem. Saepe cum est dignissimos mollitia in amet repellat. Maxime ut est. Harum consectetur magni dignissimos deserunt. Voluptatibus vel et rerum pariatur est.\n \rAut sed reiciendis fugiat iste. Et praesentium pariatur dolore voluptas. Sunt eligendi vero. Et incidunt qui et. Minus beatae qui et alias.\n \rVoluptas deleniti nemo deleniti non numquam voluptas. Consequatur provident ducimus et rem et est iste eos omnis.\n \rError soluta autem molestiae aperiam iusto officiis. Iusto non praesentium suscipit nihil autem omnis."
        },
        {
            "id": 20,
            "date": "2024-08-29T17:49:30.382Z",
            "status": "accepted",
            "order_id": 30,
            "product_id": 46,
            "customer_id": 5,
            "rating": 3,
            "comment": "Accusantium amet optio. Non dolores quibusdam maiores placeat a velit est neque facere.\n \rUt doloremque optio nihil vero excepturi explicabo omnis. Ut voluptates quaerat voluptatem fugit praesentium rerum perferendis doloremque. Voluptatem est voluptatum quo exercitationem molestiae. Ad vel aut dolore quasi. Occaecati et amet eos sit."
        },
        {
            "id": 21,
            "date": "2024-08-13T11:30:04.141Z",
            "status": "pending",
            "order_id": 30,
            "product_id": 1,
            "customer_id": 5,
            "rating": 5,
            "comment": "Et est aut ullam et ullam. Et est esse. Facere dolores incidunt iure impedit ut. Consequatur quia corrupti possimus magni aliquid at repellat voluptatem eum. Et et adipisci similique aut quam voluptatibus rerum officiis.\n \rConsequatur sed ipsum quis eum saepe est. Dolorum aspernatur quia rerum.\n \rEnim id voluptatem. Id non qui provident ipsa dolor. Doloremque sed quasi unde harum ipsum. Reiciendis possimus earum. Nostrum et dolorum et.\n \rAssumenda possimus distinctio aperiam id aut modi eveniet. Architecto dolores qui reprehenderit esse voluptas non nihil."
        },
        {
            "id": 22,
            "date": "2024-05-20T11:28:05.748Z",
            "status": "accepted",
            "order_id": 32,
            "product_id": 97,
            "customer_id": 2,
            "rating": 5,
            "comment": "Qui iure ad harum dolorem quia. Consectetur blanditiis saepe maxime reiciendis. Et voluptatibus iure aliquam excepturi dolorem voluptas quis. Velit quasi nihil minima nihil ut. Enim et deserunt unde perspiciatis.\n \rQuod nihil itaque soluta necessitatibus. Ratione adipisci perferendis. Ab vitae repudiandae itaque. Rem consequuntur cum rerum qui.\n \rIpsam eaque eum fuga expedita ut excepturi voluptates deserunt. Voluptate deserunt necessitatibus explicabo modi nisi nemo rerum. Sed et eum saepe ipsum.\n \rModi facilis et ut omnis eos harum minus aperiam quia. Aut fugit quo et blanditiis. Id veniam voluptas vel quisquam dolorum et dolores doloribus quidem. Quo tempora modi vitae sunt nihil."
        },
        {
            "id": 23,
            "date": "2024-02-08T09:53:35.377Z",
            "status": "accepted",
            "order_id": 32,
            "product_id": 4,
            "customer_id": 2,
            "rating": 2,
            "comment": "Repellendus molestias quia sequi veniam dignissimos. Est sed voluptatum maxime aliquid exercitationem est minima."
        },
        {
            "id": 24,
            "date": "2024-02-06T08:46:54.453Z",
            "status": "accepted",
            "order_id": 39,
            "product_id": 85,
            "customer_id": 26,
            "rating": 5,
            "comment": "Dolore sunt labore. Sit est autem quis nisi non non. Delectus eos quia. Deserunt et velit fuga perferendis possimus. Tempore sed voluptas sit reiciendis.\n \rFuga corporis expedita quia accusamus soluta et id. Quaerat sequi voluptatum sunt et sit consectetur non. Explicabo voluptas fuga et et enim. Qui vitae ut laudantium odio deserunt at ipsum blanditiis voluptate. Est qui culpa est quasi sint et. Placeat quam quia reprehenderit voluptatem inventore et laboriosam provident.\n \rAmet rerum quas id laborum. Et voluptatem voluptates quam eligendi debitis nobis voluptates ipsum.\n \rPlaceat ut minus corporis corrupti qui ut ut odio. Modi illo aut et."
        },
        {
            "id": 25,
            "date": "2024-08-13T01:41:33.956Z",
            "status": "accepted",
            "order_id": 42,
            "product_id": 125,
            "customer_id": 26,
            "rating": 2,
            "comment": "Totam nulla et laborum libero cupiditate ipsam. Omnis occaecati autem quidem dignissimos quia est non quas earum.\n \rConsequuntur velit commodi quia ea pariatur. Illum ipsa voluptatem voluptas ex itaque quae laboriosam. Est ex earum ut quos qui maxime neque. Ut minima veritatis recusandae vel quo quae odio. Porro voluptatem et ad delectus impedit voluptatem et qui.\n \rSit sit delectus omnis id. Quo aliquid vitae et aut. Omnis quis aspernatur totam suscipit. Aut eaque officia recusandae dolorum optio iure explicabo quis.\n \rNon natus quia iure quam deserunt. Et illo voluptatem enim molestiae. Aut itaque temporibus sit animi."
        },
        {
            "id": 26,
            "date": "2024-07-25T12:30:04.296Z",
            "status": "rejected",
            "order_id": 43,
            "product_id": 48,
            "customer_id": 39,
            "rating": 1,
            "comment": "Quidem in odio voluptatem ducimus deserunt eos aspernatur. Perspiciatis aut ut hic laboriosam aut. Qui sunt accusantium et esse non nam ut corrupti. Cupiditate et pariatur id est aliquid perferendis id. Vitae tenetur molestias. Consequatur aliquam illum quia impedit qui nihil aliquam aut."
        },
        {
            "id": 27,
            "date": "2024-07-14T18:14:19.330Z",
            "status": "rejected",
            "order_id": 45,
            "product_id": 60,
            "customer_id": 72,
            "rating": 2,
            "comment": "Omnis autem illo. Accusamus provident atque dolorem distinctio perspiciatis molestiae.\n \rDolorem esse maiores excepturi quidem. Rerum aut et similique rerum laboriosam harum quia. Accusamus rerum in quia quas. Maiores sequi reprehenderit earum inventore aut aperiam iure modi et. Tenetur blanditiis fuga in.\n \rAut et eligendi nostrum id velit iusto. Quia non sunt eos non nam quos. Aut aperiam rerum praesentium porro nihil quam sint molestias repellat. Est et pariatur mollitia ipsum est sed voluptatem. Neque aut officiis praesentium qui ut rem omnis voluptatem."
        },
        {
            "id": 28,
            "date": "2024-07-24T13:12:00.872Z",
            "status": "accepted",
            "order_id": 46,
            "product_id": 115,
            "customer_id": 5,
            "rating": 3,
            "comment": "Voluptatum architecto in. Dolorum illum et atque vel tempora aut commodi natus enim.\n \rVoluptates quae sapiente accusamus aperiam voluptatem nihil sed et. Commodi vel qui id deserunt optio adipisci qui vitae blanditiis. Non sequi est ut."
        },
        {
            "id": 29,
            "date": "2024-08-09T06:34:09.121Z",
            "status": "pending",
            "order_id": 47,
            "product_id": 20,
            "customer_id": 2,
            "rating": 3,
            "comment": "Accusamus omnis architecto consequatur in numquam illum reiciendis. Ducimus et enim fuga eveniet nam distinctio exercitationem nam. Pariatur quod doloremque illum ut eius. Architecto sit veritatis temporibus voluptate. Odio nemo qui tempore corporis dolorem voluptatibus iusto.\n \rLaboriosam qui temporibus repellat repellendus alias fugiat sit. Nemo aut repellat. Excepturi asperiores temporibus ut ea amet dignissimos. Nulla laudantium qui id voluptatum dolores mollitia consequatur. Ad in nulla. Natus voluptates magni.\n \rDoloremque voluptas alias. Aut dolor eveniet reiciendis saepe expedita distinctio quod. Harum optio rerum eum. Nemo ipsam odit laborum consequatur eos doloremque aut quis.\n \rUt harum sequi saepe quaerat ad quis et unde qui. Vero provident nesciunt cum et eligendi aut. Alias suscipit suscipit iste iure dolorem. Nobis eos fugit perferendis quisquam facere fuga dolores ipsum. Similique dolore sit consequatur porro. Fugit et maiores qui reiciendis aut id minima fugit dolores."
        },
        {
            "id": 30,
            "date": "2024-05-04T19:21:00.456Z",
            "status": "rejected",
            "order_id": 48,
            "product_id": 49,
            "customer_id": 77,
            "rating": 5,
            "comment": "Nisi vel itaque aspernatur. Quae neque quam. Consequatur omnis assumenda est et sapiente voluptatem. Illo sit sunt enim. Aperiam laborum sint. Minus et qui quia quidem ipsa officia rerum quas omnis.\n \rIste dolorum maxime perferendis quasi facere. Omnis vel cum inventore et."
        },
        {
            "id": 31,
            "date": "2023-10-13T15:42:05.237Z",
            "status": "rejected",
            "order_id": 54,
            "product_id": 51,
            "customer_id": 26,
            "rating": 3,
            "comment": "Sapiente eum consectetur repellat. Est incidunt et sunt consectetur quia qui delectus nam provident. Non quia modi voluptatem."
        },
        {
            "id": 32,
            "date": "2024-05-20T19:33:37.874Z",
            "status": "accepted",
            "order_id": 56,
            "product_id": 96,
            "customer_id": 55,
            "rating": 2,
            "comment": "Exercitationem ut est voluptatibus sit maiores ipsum nesciunt. Neque magni rerum laborum pariatur natus perspiciatis.\n \rDignissimos ullam eveniet sit a est. Ducimus totam iusto reiciendis et repellendus illo error repellat. Rerum rerum ipsam delectus minus et nemo exercitationem sint. Sunt similique perferendis fuga quia. Nemo odio repellendus qui nihil aliquam blanditiis praesentium.\n \rError sapiente rerum consequatur magni soluta. Ex possimus in assumenda aspernatur et ut dolorem. Numquam odit placeat ex. Maiores dolorem earum perspiciatis similique delectus impedit nemo nihil. Quod dolorem ut minima. Corporis maxime natus fuga est repudiandae."
        },
        {
            "id": 33,
            "date": "2024-05-23T23:03:51.522Z",
            "status": "accepted",
            "order_id": 57,
            "product_id": 105,
            "customer_id": 80,
            "rating": 3,
            "comment": "Quae accusamus alias ab est. Quam fugiat ut eos et atque eaque. Nesciunt fugiat quisquam ut voluptatum. Qui numquam amet."
        },
        {
            "id": 34,
            "date": "2024-08-21T05:26:30.062Z",
            "status": "pending",
            "order_id": 57,
            "product_id": 90,
            "customer_id": 80,
            "rating": 3,
            "comment": "Perferendis consequuntur eum magnam inventore consectetur qui. Expedita dolore ut. Quod voluptatem possimus assumenda error veniam. Rerum voluptates corrupti ex dolores. Veritatis qui velit est at. Laboriosam explicabo consectetur ipsa delectus officia."
        },
        {
            "id": 35,
            "date": "2024-07-25T03:23:31.118Z",
            "status": "accepted",
            "order_id": 57,
            "product_id": 80,
            "customer_id": 80,
            "rating": 3,
            "comment": "Omnis nihil assumenda consequatur. Sit blanditiis qui cupiditate saepe. Dolore voluptas ea veritatis. Distinctio est velit facilis placeat delectus."
        },
        {
            "id": 36,
            "date": "2024-06-28T05:41:40.347Z",
            "status": "accepted",
            "order_id": 58,
            "product_id": 41,
            "customer_id": 30,
            "rating": 3,
            "comment": "In provident sunt ut. Molestiae accusantium exercitationem aut similique accusantium a. Ipsum dolor laudantium vel rem quis officia quia. Eos aut et soluta consequuntur voluptatum ea perspiciatis. Aspernatur inventore et qui.\n \rNumquam adipisci totam. Quasi harum nemo placeat est sit eaque sed. Ut aut itaque. Asperiores nihil et temporibus nihil et. Quo voluptas quae quo.\n \rSed neque fuga aut similique ut nesciunt expedita. Ab repudiandae sint voluptatem et. Aut velit cum aut quas ab reprehenderit error quas nesciunt. Voluptas ipsum distinctio ab sit ipsum autem consequatur accusantium.\n \rDolore voluptas modi quisquam sit. Inventore magni dolor maxime error enim molestiae dignissimos. Sunt possimus ex aperiam est. A dolorem nostrum fugit repellendus ea. Et unde rerum error perferendis exercitationem. Cupiditate aut aut neque tempore."
        },
        {
            "id": 37,
            "date": "2024-02-08T19:15:47.529Z",
            "status": "accepted",
            "order_id": 64,
            "product_id": 94,
            "customer_id": 2,
            "rating": 3,
            "comment": "Facilis amet occaecati debitis possimus aut et. Ipsa rerum ducimus sit ullam eveniet quos dolores. Consequatur voluptatem sunt. Magnam neque necessitatibus reiciendis qui ut. Voluptatibus eveniet voluptatem ipsa totam delectus nihil repudiandae unde ullam. Quam rem vel temporibus cumque consequatur.\n \rConsequatur qui quaerat earum ut dolore minima occaecati. Voluptates et est qui illum beatae saepe debitis omnis placeat. Rerum molestiae ut maiores asperiores eveniet."
        },
        {
            "id": 38,
            "date": "2024-03-06T00:12:12.638Z",
            "status": "accepted",
            "order_id": 65,
            "product_id": 58,
            "customer_id": 55,
            "rating": 2,
            "comment": "Et hic inventore minus saepe quam ut recusandae. Rerum quae deleniti molestias voluptatem consequatur ad eum. Ab ut quia consequatur expedita.\n \rAliquam est voluptatem autem ipsa quibusdam est voluptas nostrum. Rerum porro perferendis cum et voluptatem omnis.\n \rQui qui qui sunt nostrum enim qui possimus neque. Repudiandae rerum id nisi et. Odit vel tempore eos explicabo sed non. Ad explicabo maiores in nesciunt ut fugiat ut."
        },
        {
            "id": 39,
            "date": "2024-02-27T14:08:04.363Z",
            "status": "rejected",
            "order_id": 65,
            "product_id": 64,
            "customer_id": 55,
            "rating": 4,
            "comment": "Et eligendi porro et. A eum distinctio aut incidunt a et aut quia totam. Laudantium sit nesciunt nihil dolor qui excepturi veritatis. Enim omnis incidunt omnis. Optio enim itaque dignissimos id. Doloremque alias voluptatem qui dolor magni error itaque.\n \rAliquid sit asperiores eius veniam excepturi excepturi ut. Non sed cumque corrupti beatae odit vero mollitia. Veritatis ex ducimus excepturi quod nihil similique necessitatibus. Velit corporis dolor cumque aut mollitia rerum occaecati. Vel eum qui ullam dolore sit voluptatem consectetur.\n \rIpsum et quia ad maxime error. Ullam hic sed autem neque dolore sapiente quo quia aut. Vel ex distinctio animi.\n \rPorro corporis dolor id. Inventore facilis voluptatem sunt dolorum doloribus tenetur recusandae fugit quidem. At eum mollitia deserunt vel atque et voluptatem cupiditate. Dolorum eveniet occaecati eos pariatur architecto quasi cum. Quae omnis facilis incidunt quos amet illum. Dolorem aut tempore sed quam et accusantium."
        },
        {
            "id": 40,
            "date": "2024-06-21T14:19:13.483Z",
            "status": "rejected",
            "order_id": 70,
            "product_id": 108,
            "customer_id": 76,
            "rating": 3,
            "comment": "Ducimus nemo laborum et omnis aperiam quos. Omnis culpa vel voluptas in corrupti est qui ut.\n \rQuae libero pariatur. Aperiam fugiat qui quia ipsum in ipsum unde velit dolores. Officiis maxime a ut quo ex. Quia aliquid aliquid et vero non nisi. At ex sapiente modi repellendus.\n \rIpsa cupiditate cupiditate sint et iste eum occaecati nesciunt ducimus. Deleniti quo ipsam. Ut praesentium dolorum libero in qui. Dolores earum quia autem maiores cupiditate cum commodi et. Ut dignissimos commodi nihil quam.\n \rAperiam explicabo doloribus dolorem ducimus illum et. Ad quae et ab et quia tempore quo est alias. Culpa quae quia nemo rerum unde. Delectus veniam assumenda vel illum doloribus omnis necessitatibus sapiente repellat. Aut suscipit alias perferendis cupiditate. Maiores deleniti consectetur vel sint mollitia hic."
        },
        {
            "id": 41,
            "date": "2024-07-01T18:57:43.478Z",
            "status": "accepted",
            "order_id": 73,
            "product_id": 11,
            "customer_id": 80,
            "rating": 5,
            "comment": "Enim aut eos est. Odit vitae molestias porro nihil.\n \rEt et sed sit et rem quos. Nemo ea exercitationem nulla unde sequi quas neque. Et in vel maiores beatae illo. Excepturi iusto deserunt illum odit eos qui est."
        },
        {
            "id": 42,
            "date": "2024-01-15T06:41:39.483Z",
            "status": "rejected",
            "order_id": 76,
            "product_id": 35,
            "customer_id": 94,
            "rating": 3,
            "comment": "Molestiae similique labore voluptates dolores ut perspiciatis molestias unde. Iste rerum rerum earum provident voluptatem odio. Laboriosam ipsam amet aut dolores voluptate perferendis quia dolor. Voluptas aperiam ex praesentium repellat id provident. Qui sit fugit rem quisquam.\n \rA assumenda a sint perferendis non pariatur blanditiis consequuntur. Voluptas possimus omnis nam sint minima. Incidunt cumque quos sint aliquam eum dicta sit est. Fugit neque voluptas quasi blanditiis laborum."
        },
        {
            "id": 43,
            "date": "2024-08-08T03:28:12.817Z",
            "status": "pending",
            "order_id": 76,
            "product_id": 112,
            "customer_id": 94,
            "rating": 1,
            "comment": "Harum eum eaque aut. Unde voluptatem debitis dignissimos minus. Qui ipsum non reiciendis enim voluptatem qui. Quia aperiam fugit nesciunt aliquid qui quibusdam asperiores necessitatibus dolores. Error nostrum reprehenderit ut."
        },
        {
            "id": 44,
            "date": "2023-12-28T07:14:12.165Z",
            "status": "accepted",
            "order_id": 79,
            "product_id": 1,
            "customer_id": 55,
            "rating": 1,
            "comment": "Ab explicabo ea. Ipsum omnis nostrum et fugit rem sunt ea eaque nesciunt. Facere voluptas voluptatem soluta. Dolor vitae ipsam in quidem nemo quos. A et distinctio iste quis repellendus architecto voluptatum vel eum. Quae praesentium reprehenderit et aliquid ut omnis aliquam voluptatem.\n \rDicta nam ea in iure dolores dolore. Consequatur deleniti ipsum quae velit dolore doloremque recusandae quia. Aut sunt et et inventore eum. Id voluptas eos. Nihil commodi id et est cum. Et aut iure enim et.\n \rVoluptatem illo qui labore et delectus aut illum similique. Enim ducimus ipsum impedit eum labore vel quia. Ab dolor amet ut beatae ut sed natus iste. Eligendi sunt beatae iure cupiditate repudiandae aut voluptatum pariatur dolorem.\n \rPariatur laudantium esse dolor perspiciatis omnis. Dolorem vel officia aut similique. Voluptatem rerum tempora enim hic. Nesciunt autem delectus doloribus sed deserunt nesciunt.\n \rNon voluptatem velit expedita est ipsa praesentium sit tempore. Placeat qui magnam ea omnis. Omnis numquam voluptatem et repudiandae eligendi accusantium error cupiditate."
        },
        {
            "id": 45,
            "date": "2024-08-30T16:49:16.197Z",
            "status": "pending",
            "order_id": 80,
            "product_id": 127,
            "customer_id": 2,
            "rating": 3,
            "comment": "Est illo quia sed est. Enim explicabo maiores quia vel sapiente cupiditate. Accusamus illo voluptatem quibusdam sint est labore. Eveniet et dolor rerum labore. Libero nobis repudiandae sed consectetur velit veniam cum.\n \rAliquid sit quas consequuntur ut est similique id quasi. Sed inventore quidem alias illo nihil culpa nihil ipsa omnis.\n \rNeque accusantium dignissimos cupiditate et facere. Soluta reprehenderit laborum ducimus sunt quos eius quo velit molestias. Quasi dolore modi ex quo corrupti rerum est eos mollitia. Iure impedit occaecati enim consequuntur id. Molestiae quisquam asperiores. Nihil exercitationem et autem.\n \rExercitationem molestias molestias velit quae nobis. Et est delectus quo rem unde nemo dolor quam facere. Provident dolores eos odit et sit ex incidunt consequatur aut. Quia tempora modi totam pariatur omnis repudiandae libero rerum."
        },
        {
            "id": 46,
            "date": "2024-04-25T09:54:15.264Z",
            "status": "rejected",
            "order_id": 80,
            "product_id": 36,
            "customer_id": 2,
            "rating": 5,
            "comment": "Vitae sequi itaque dicta enim laborum ipsam. Tenetur et nostrum asperiores quam est mollitia quisquam inventore.\n \rEx sit dolor iure tempora modi. Voluptatem voluptatem placeat. Delectus rem inventore voluptatum fugit voluptatem velit quis vero cum. Repellat fugiat quas ullam praesentium voluptatem. Illo veniam ut officia quod occaecati velit minus id optio. Et rerum et error.\n \rEt qui officiis optio recusandae alias itaque commodi. Sit reprehenderit et. Et corporis dolorum doloremque natus laborum et quis. Voluptatem odio quisquam sed eaque vel quae nihil. Nostrum architecto et aperiam ut est ducimus aut blanditiis. Sequi aut aut autem."
        },
        {
            "id": 47,
            "date": "2024-05-17T19:32:17.142Z",
            "status": "accepted",
            "order_id": 84,
            "product_id": 70,
            "customer_id": 0,
            "rating": 3,
            "comment": "Ratione omnis vero recusandae. Accusantium labore ut velit tenetur vel.\n \rNihil et qui enim. Adipisci maxime odio eligendi at commodi. Quam nobis itaque modi doloremque architecto ut qui consequatur. Nobis ipsa perferendis est et cum qui a dolores. Doloribus sit in et eaque voluptatem occaecati corporis."
        },
        {
            "id": 48,
            "date": "2024-08-03T05:13:39.254Z",
            "status": "accepted",
            "order_id": 86,
            "product_id": 91,
            "customer_id": 5,
            "rating": 3,
            "comment": "Aut enim qui. Est est illo deserunt. Dignissimos numquam magni reprehenderit omnis dolorum porro. Neque officiis praesentium consequatur itaque quis nisi.\n \rDicta eius repellat harum aut. At ut beatae porro qui a et doloribus cupiditate ipsum. Voluptates corrupti natus natus cupiditate. Quae quod veniam beatae eaque.\n \rNumquam consequatur incidunt neque voluptatem est alias. Est voluptas hic incidunt quia sunt vitae non voluptatum quo. Omnis qui qui aut commodi sunt soluta. Qui sit esse. Eius iusto non laborum mollitia vero velit quia."
        },
        {
            "id": 49,
            "date": "2024-06-26T05:52:54.977Z",
            "status": "accepted",
            "order_id": 89,
            "product_id": 73,
            "customer_id": 76,
            "rating": 1,
            "comment": "Doloremque culpa et quibusdam molestiae possimus sapiente deserunt sint aut. Quae qui numquam quia dolorem ea omnis neque quibusdam saepe. Molestias consectetur autem itaque qui.\n \rAut ipsam nam quia non aut explicabo. Labore minima consequatur. Similique impedit molestiae consequatur sapiente recusandae itaque amet voluptatem necessitatibus. Molestias ab nobis et voluptates."
        },
        {
            "id": 50,
            "date": "2024-05-19T22:54:07.893Z",
            "status": "accepted",
            "order_id": 89,
            "product_id": 36,
            "customer_id": 76,
            "rating": 1,
            "comment": "Voluptatem aut sed harum. Provident repudiandae magni ut corporis omnis consequuntur debitis eius aliquid. Numquam sit aut laboriosam reiciendis dolores. Quod est quod eos ab incidunt temporibus et consequatur in. Quo sunt dolorem hic.\n \rBeatae neque eveniet et aliquam possimus et qui. Nulla repellat maxime beatae quo voluptate accusamus. Tenetur aut sit mollitia ratione rerum non velit qui accusamus. Nemo quas aliquam nisi. Earum aut expedita quod soluta quibusdam omnis quasi sed delectus. Rerum quae quam occaecati.\n \rNisi ut quasi. A et ratione odio dolorem non et sequi sit. Porro dignissimos expedita adipisci accusantium dicta dolorum nulla.\n \rAut odio numquam quia eum illo. Id beatae repellendus voluptatem est est non voluptatum. Amet porro non.\n \rSoluta et cumque. Deserunt et cum vel omnis facilis quis in. Officiis veritatis voluptas. Laborum delectus doloremque officiis quas adipisci possimus odit dolor. Et quasi sint cupiditate consequuntur. Dolores dolor aut illum."
        },
        {
            "id": 51,
            "date": "2024-04-09T00:27:09.853Z",
            "status": "accepted",
            "order_id": 90,
            "product_id": 69,
            "customer_id": 39,
            "rating": 4,
            "comment": "Sunt expedita excepturi officiis nostrum. Vero ea consequuntur excepturi vel enim minima. Consequatur voluptas et aut.\n \rEt nisi totam vitae dolores. Voluptas quo qui eum. Tempore consequatur ut quis dolor. Doloremque voluptatem amet eos architecto temporibus. Cum asperiores iusto sunt."
        },
        {
            "id": 52,
            "date": "2024-01-17T17:12:34.015Z",
            "status": "rejected",
            "order_id": 90,
            "product_id": 79,
            "customer_id": 39,
            "rating": 5,
            "comment": "Velit est beatae dicta libero sit fuga doloremque. Pariatur iste velit voluptas.\n \rMolestiae quia quam. Quia excepturi suscipit necessitatibus non."
        },
        {
            "id": 53,
            "date": "2024-06-27T13:49:09.922Z",
            "status": "accepted",
            "order_id": 90,
            "product_id": 98,
            "customer_id": 39,
            "rating": 1,
            "comment": "Illo quidem omnis maiores iusto eaque. Saepe sint tenetur dicta sequi quo. Illo molestias autem. Dolorem aspernatur maxime facere quisquam optio voluptas velit. Quos consequatur aut qui quo eos labore reiciendis omnis ea. Quis eaque sint tenetur sit commodi.\n \rVoluptate neque dolorem culpa ut fugit. Enim ipsa velit consequuntur. Sed eos et veniam voluptatem. Quo perspiciatis consequatur beatae. Consequuntur exercitationem iure. Voluptatem perferendis deserunt voluptatem quasi."
        },
        {
            "id": 54,
            "date": "2024-04-20T19:53:08.647Z",
            "status": "rejected",
            "order_id": 92,
            "product_id": 77,
            "customer_id": 2,
            "rating": 3,
            "comment": "Odio enim vel voluptatem sequi id sunt aliquam. Cupiditate non pariatur qui.\n \rQui sapiente exercitationem velit rerum reprehenderit beatae. Ducimus minus rerum rerum voluptatem repellendus pariatur. Est cumque nobis totam quidem. Fugiat consequuntur voluptas. Sit laboriosam nulla fugiat ratione itaque. Ea officia possimus aliquam aut quibusdam eos deserunt quia non."
        },
        {
            "id": 55,
            "date": "2024-03-05T14:54:53.486Z",
            "status": "accepted",
            "order_id": 92,
            "product_id": 16,
            "customer_id": 2,
            "rating": 5,
            "comment": "Hic assumenda saepe autem harum et. Voluptas quis nihil inventore quasi aliquam illo cum esse quam. Facere error aspernatur sit veritatis laboriosam et. Quae ipsum dolore. Dolor quas similique consequuntur facilis rerum."
        },
        {
            "id": 56,
            "date": "2024-05-31T19:21:41.305Z",
            "status": "accepted",
            "order_id": 92,
            "product_id": 109,
            "customer_id": 2,
            "rating": 2,
            "comment": "Quas illo explicabo molestias sint id perferendis. Non enim similique repudiandae harum est et delectus occaecati. Possimus dolor qui eos magnam iure. Veniam eaque id qui nobis quia et. Quia sed saepe.\n \rEveniet non nisi non dolorum. Sunt architecto delectus reiciendis ipsum. Rerum quis voluptate.\n \rTotam iure minima ipsum est quia. Ad modi voluptatum consequatur ut consequatur debitis deserunt quas.\n \rTotam aliquid neque dolorem amet debitis voluptas nihil dicta. Voluptatem quos vel voluptates asperiores iste voluptate ut. Aut at vel laborum. Ex nobis et. Autem eum nemo voluptatem nostrum necessitatibus adipisci porro quae."
        },
        {
            "id": 57,
            "date": "2024-06-17T23:45:03.357Z",
            "status": "rejected",
            "order_id": 95,
            "product_id": 56,
            "customer_id": 30,
            "rating": 3,
            "comment": "Ullam cumque itaque sint vero aut eveniet ut voluptatem ut. Itaque est eius consequatur quia est dignissimos nisi temporibus. Dolor dolores est.\n \rNihil deserunt blanditiis error ipsa ipsam nisi error aspernatur. Error ad incidunt sit beatae hic. Vitae voluptas perspiciatis aut corrupti aut maiores aut aut eum.\n \rUt suscipit qui deleniti aperiam dicta exercitationem. Odio eligendi sint hic ipsa ea molestiae. Nemo voluptatem officia voluptas aut dolor. Est illo laborum laudantium vero maxime dolor. Mollitia ex eum debitis."
        },
        {
            "id": 58,
            "date": "2024-08-05T18:45:28.678Z",
            "status": "accepted",
            "order_id": 99,
            "product_id": 118,
            "customer_id": 39,
            "rating": 2,
            "comment": "Non quae eligendi aperiam deleniti molestiae recusandae qui at. Fugit eos molestiae quia provident labore voluptate ab sapiente ut. Aut aut quo velit non asperiores illum aperiam.\n \rMolestiae et aut tempora tempora. Est porro culpa necessitatibus veritatis et in doloremque blanditiis. Tempora officia dolor eum.\n \rAd non non. Maiores sint ullam et et eum sunt inventore. Delectus voluptatem dignissimos in voluptatem mollitia minus. Occaecati corporis expedita rerum in.\n \rEligendi ea et laboriosam. Nihil odio quo mollitia. Nihil aut dolorem voluptas qui explicabo nisi temporibus ut. Odit placeat repudiandae dolor. Placeat quaerat iste atque eveniet. Et aspernatur maiores nostrum necessitatibus aliquam libero ut porro earum."
        }
    ];

    return result;
};

export type Review = {
    id: number;
    date: string;
    status: 'accepted' | 'rejected' | 'pending';
    order_id: number;
    product_id: number;
    customer_id: number;
    rating: number;
    comment: string;
};
