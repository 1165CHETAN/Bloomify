const PRODUCTS = [
	{
		id: 1,
		name: 'Marigold (Tagetes spp.)',
		price: '₹50-100',
		image: require('./images/1.png'),
		details:
			'Marigolds are renowned for their vibrant blooms and natural pest-repellent properties. They attract beneficial insects like ladybugs and lacewings.',
		details1:
			'Marigolds are vibrant and easy-to-grow flowers that thrive in sunny locations with well-drained soil. Regular watering and deadheading of spent blooms promote continuous flowering, while their natural pest-repellent properties make them a valuable addition to any garden.',
	},
	{
		id: 2,
		name: 'Sunflower (Helianthus annuus)',
		price: '₹70-120',
		image: require('./images/2.png'),
		details:
			'Sunflowers are not only beautiful but also attract pollinators like bees and butterflies to the garden. They provide a source of nectar and pollen.',
		details1:
			'Sunflowers are iconic symbols of summer, boasting large, cheerful blooms that follow the sun movement. Plant them in a sunny spot with fertile, well-drained soil, and provide support for taller varieties to prevent bending. With minimal care and regular watering, sunflowers will brighten your garden and attract pollinators throughout the season.',
	},
	{
		id: 3,
		name: 'Zinnia (Zinnia elegans)',
		price: '₹60-100',
		image: require('./images/3.png'),
		details:
			' Zinnias are colorful and easy-to-grow flowers that bloom abundantly throughout the summer. They attract butterflies and hummingbirds.',
		details1:
			'Zinnias are beloved for their vibrant colors and long-lasting blooms, making them a popular choice for gardeners of all levels. Plant them in full sun with well-drained soil, and deadhead spent flowers to encourage continuous blooming. With their easy-going nature and cheerful appearance, zinnias are sure to bring joy to any garden.',
	},
	{
		id: 4,
		name: 'Cosmos (Cosmos spp.)',
		price: '₹40-80',
		image: require('./images/4.png'),
		details:
			'Cosmos flowers are known for their delicate, daisy-like blooms and airy foliage. They attract pollinators and beneficial insects.',
		details1:
			'Cosmos flowers are delicate and airy, adding a touch of whimsy to any garden landscape. Plant them in a sunny location with well-drained soil, and enjoy their profusion of colorful blooms throughout the summer. With their drought-tolerant nature and attractive appearance, cosmos are a must-have for any flower garden.',
	},
	{
		id: 5,
		name: 'Lavender (Lavandula spp.)',
		price: '₹100-150',
		image: require('./images/5.png'),
		details:
			'Lavender is prized for its fragrant flowers and aromatic foliage. It attracts bees and other pollinators, while also repelling pests like mosquitoes and fleas.',
		details1:
			'Lavender is prized for its fragrant blooms and aromatic foliage, making it a versatile addition to gardens, borders, and containers. Plant it in well-drained soil and full sun, and water sparingly once established. Prune lavender in spring to promote bushy growth and enjoy its calming scent and beautiful flowers all season long.'
	},
	{
		id: 6,
		name: 'Sweet Alyssum (Lobularia maritima)',
		price: '₹50-80',
		image: require('./images/6.png'),
		details:
			' Sweet Alyssum is a low-growing flower with clusters of tiny, fragrant blooms. It attracts beneficial insects like hoverflies and parasitic wasps.',
			details1:
			'Sweet Alyssum is a charming ground cover with delicate, honey-scented blooms that attract butterflies and other pollinators. Plant it in full sun to partial shade and well-drained soil, and keep the soil consistently moist for best results. With its low-growing habit and prolific flowering, sweet alyssum adds a delightful touch to rock gardens, borders, and containers.'
	},
	{
		id: 7,
		name: 'Nasturtium (Tropaeolum majus)',
		price: ' ₹60-100',
		image: require('./images/7.png'),
		details:
			'Nasturtiums are edible flowers that add a pop of color to salads and dishes. They also attract pollinators and repel pests like aphids and whiteflies.',
			details1:
			'Nasturtiums are cheerful, edible flowers that brighten up any garden with their vibrant colors and peppery flavor. Plant them in well-drained soil and full sun to partial shade, and water regularly to keep the soil evenly moist. With their easy-to-grow nature and attractive foliage, nasturtiums are perfect for adding color and flavor to salads, garnishes, and culinary creations.'
	},
	{
		id: 8,
		name: 'Petunia (Petunia spp.)',
		price: '₹80-120',
		image: require('./images/8.png'),
		details:
			'Petunias are popular bedding plants prized for their wide range of colors and patterns. They attract butterflies and hummingbirds.',
			details1:
			'Petunias are classic bedding plants known for their profusion of colorful blooms and versatility in garden landscapes. Plant them in well-drained soil and full sun, and water regularly to keep the soil evenly moist. With their wide range of colors and long-lasting blooms, petunias are ideal for adding vibrant color and visual interest to flower beds, containers, and hanging baskets.'
	},
	{
		id: 9,
		name: 'Bee Balm (Monarda spp.)',
		price: '₹70-120',
		image: require('./images/9.png'),
		details:
			'Bee Balm, also known as Bergamot, produces showy, nectar-rich flowers, It is an excellent addition to pollinator gardens.',
			details1:
			'Bee Balm, also known as Bergamot, is a showy perennial with striking, nectar-rich flowers that attract bees, butterflies, and hummingbirds. Plant it in moist, well-drained soil and full sun to partial shade, and water regularly to keep the soil evenly moist. With its bold blooms and aromatic foliage, bee balm is a valuable addition to pollinator gardens and herbaceous borders.'
	},
	{
		id: 10,
		name: 'Gaillardia (Gaillardia spp.)',
		price: '₹50-90',
		image: require('./images/10.png'),
		details:
			'Gaillardias, or Blanket Flowers, are drought-tolerant perennials with striking, daisy-like blooms. ',
			details1:
			'Gaillardias, or Blanket Flowers, are drought-tolerant perennials with cheerful, daisy-like blooms that brighten up any garden landscape. Plant them in full sun and well-drained soil, and water regularly until established. With their long-lasting blooms and attractive foliage, gaillardias are perfect for adding color and visual interest to flower beds, borders, and wildflower meadows.'
	},
	{
		id: 11,
		name: 'Calendula (Calendula officinalis)',
		price: '₹60-100',
		image: require('./images/11.png'),
		details:
			'Calendula, or Pot Marigold, is not only a beautiful flower but also has medicinal properties.',
			details1:
			'Calendula, or Pot Marigold, is a versatile annual with bright, cheerful blooms that attract bees and butterflies to the garden. Plant it in well-drained soil and full sun to partial shade, and water regularly to keep the soil evenly moist. With its edible flowers and medicinal properties, calendula is a valuable addition to herb gardens, flower beds, and companion planting schemes.'
	},
	{
		id: 12,
		name: 'Snapdragon (Antirrhinum majus)',
		price: '₹80-120',
		image: require('./images/12.png'),
		details:
			'Snapdragons are tall, spiky flowers prized for their colorful blooms and distinctive shape.',
			details1:
			'Snapdragons are classic garden favorites known for their tall spikes of colorful blooms and delightful fragrance. Plant them in well-drained soil and full sun to partial shade, and water regularly to keep the soil evenly moist. With their long-lasting blooms and attractive foliage, snapdragons are perfect for adding height and visual interest to flower beds, borders, and containers.'
	},
	{
		id: 13,
		name: 'Bachelor Button (Centaurea cyanus)',
		price: '₹40-80',
		image: require('./images/13.png'),
		details:
			'Bachelor Buttons, also known as Cornflowers, produce charming, blue-purple blooms that attract bees and butterflies.',
			details1:
			'Bachelor Buttons, also known as Cornflowers, are charming annuals with bright, blue-purple blooms that add a touch of nostalgia to any garden landscape. Plant them in well-drained soil and full sun, and water regularly until established. With their easy-going nature and cheerful appearance, bachelor buttons are perfect for adding color and charm to cottage gardens, wildflower meadows, and cut flower arrangements.'
	},
	{
		id: 14,
		name: 'Black-eyed Susan (Rudbeckia hirta)',
		price: '₹50-90',
		image: require('./images/14.png'),
		details:
			'Black-eyed Susans are native wildflowers with cheerful, daisy-like blooms. They attract pollinators and beneficial insects',
			details1:
			'Black-eyed Susans are native wildflowers with cheerful, daisy-like blooms that brighten up any garden landscape. Plant them in well-drained soil and full sun, and water regularly until established. With their long-lasting blooms and attractive foliage, black-eyed Susans are perfect for adding color and visual interest to flower beds, borders, and naturalized areas.'
	},
	{
		id: 15,
		name: 'Verbena (Verbena spp.)',
		price: '₹70-120',
		image: require('./images/15.png'),
		details:
			'Verbena is a versatile flowering plant that attracts bees, butterflies, and hummingbirds with its nectar-rich blooms.',
			details1:
			'Verbena is a versatile annual with clusters of small, colorful blooms that attract butterflies and other pollinators to the garden. Plant it in well-drained soil and full sun, and water regularly to keep the soil evenly moist. With its long-lasting blooms and attractive foliage, verbena is perfect for adding color and texture to flower beds, containers, and hanging baskets.'
	},
];

export default PRODUCTS;
