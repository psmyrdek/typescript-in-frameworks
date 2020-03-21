import * as express from 'express';

const app = express();

app.get('/feed', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json([
        {
            name: 'John Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tincidunt commodo. Aenean maximus neque ut nisi fermentum consectetur. Mauris ligula tortor, pharetra ac justo sed, pulvinar lobortis magna. Duis fringilla erat tincidunt mauris aliquam posuere. Fusce augue diam, dapibus vitae nulla a, eleifend ullamcorper lectus. Aenean tempor feugiat arcu, et placerat magna tempus non. Proin pretium mollis quam nec semper. Etiam a leo nec nisl porta tincidunt. Ut nec vulputate odio. Aenean tempor, tortor non elementum pellentesque, turpis urna molestie lacus, in dictum mauris ligula non velit. Praesent consequat nisl odio, et congue ex cursus sit amet.'
        },
        {
            name: 'Mark Kaminski',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tincidunt commodo. Aenean maximus neque ut nisi fermentum consectetur. Mauris ligula tortor, pharetra ac justo sed, pulvinar lobortis magna. Duis fringilla erat tincidunt mauris aliquam posuere. Fusce augue diam, dapibus vitae nulla a, eleifend ullamcorper lectus. Aenean tempor feugiat arcu, et placerat magna tempus non. Proin pretium mollis quam nec semper. Etiam a leo nec nisl porta tincidunt. Ut nec vulputate odio. Aenean tempor, tortor non elementum pellentesque, turpis urna molestie lacus, in dictum mauris ligula non velit. Praesent consequat nisl odio, et congue ex cursus sit amet.'
        },
        {
            name: 'Natalie Walbert',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tincidunt commodo. Aenean maximus neque ut nisi fermentum consectetur. Mauris ligula tortor, pharetra ac justo sed, pulvinar lobortis magna. Duis fringilla erat tincidunt mauris aliquam posuere. Fusce augue diam, dapibus vitae nulla a, eleifend ullamcorper lectus. Aenean tempor feugiat arcu, et placerat magna tempus non. Proin pretium mollis quam nec semper. Etiam a leo nec nisl porta tincidunt. Ut nec vulputate odio. Aenean tempor, tortor non elementum pellentesque, turpis urna molestie lacus, in dictum mauris ligula non velit. Praesent consequat nisl odio, et congue ex cursus sit amet.'
        }
    ])
})

app.listen(5000, () => {
    console.log('Listening at http://localhost:5000')
});