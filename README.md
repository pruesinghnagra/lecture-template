# Lecture template

### Kia ora friends! Here are some handy notes for our slide deck template.

- Components in Spectacle can accept either a value label such as primary or a raw CSS value like #f00. The label primary returns #f00 since the backgroundColor prop (CSS property background-color) is mapped to the colors theme key

- A template in Spectacle is a fixed overlay of components that are presented on every slide. They are similar to masters in Keynote or PowerPoint. It’s a function prop that has a single optional config object containing current slide and total slide count and returns a React Node.