import pages from './pages';
import('./styles.css');
import profilePage from './profilePage';

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
  const pageName = model.getRandomeElement(pageNames);
  pages.openPage(pageName);
});

profilePage.handleEvents();
