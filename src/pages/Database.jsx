export const Database = {
  Videos: {
    async findAll({ category, limit }) {
      const allVideos = [
        { id: 1, title: 'React Hooks Tutorial', url: '/videos/react-hooks.mp4', category: 'featured' },
        { id: 2, title: 'Next.js Basics', url: '/videos/nextjs-basics.mp4', category: 'featured' },
        { id: 3, title: 'JavaScript ES6 Features', url: '/videos/es6-features.mp4', category: 'featured' },
        { id: 4, title: 'State Management in React', url: '/videos/state-management.mp4', category: 'featured' },
        { id: 5, title: 'Building APIs with Node.js', url: '/videos/node-apis.mp4', category: 'featured' },
        { id: 6, title: 'CSS Grid Layout', url: '/videos/css-grid.mp4', category: 'featured' },
      ];
      return allVideos.filter(v => v.category === category).slice(0, limit);
    },
  },
};