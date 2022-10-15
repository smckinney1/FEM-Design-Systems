# Design system introduction

Design system made following Emma Bostian's [Design Systems course](https://frontendmasters.com/courses/design-systems/) on FrontendMasters.

I took some liberties with the instruction at times. There are a number of things I would change if I were working on a real project, such as:

1. Using props instead of separate exports for Primary, Secondary, etc. button variants
2. Using TypeScript or, at minimum, PropTypes
3. Putting more thought into the configuration of the theme object for styled-components
4. Making the modal accessible with assistive technology
5. Implementing proper dark mode (dark mode theme provided by the course was incompatible with the colors I selected and the theme config object I set up, so I skipped this section)
6. Putting more thought into the Storybook implementation (I didn't want to spend a lot of time here because of point number 1; the component API suggested in the course is hard to work with in modern Storybook versions)
