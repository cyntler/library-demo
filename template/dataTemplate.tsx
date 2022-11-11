export default (): DemoData => ({
  name: '',
  githubLink: '',
  examples: [
    {
      label: 'Example 1',
      description: 'Place for your component or element.',
      element: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          varius augue sed nulla pretium euismod. Aenean euismod sapien justo,
          id congue mauris finibus vel.
        </p>
      ),
    },
  ],
});
