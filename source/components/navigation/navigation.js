(function () {
  const links = document.querySelectorAll('.navigation__link-site');
  const advantages = document.getElementById('advantages');
  const achievements = document.getElementById('achievements');
  const prices = document.getElementById('prices');
  const contacts = document.getElementById('contacts');

  let idAdvantagesCheck = advantages.getAttribute('id');
  let idAchievementsCheck = achievements.getAttribute('id');
  let idPricesCheck = prices.getAttribute('id');
  let idContactsCheck = contacts.getAttribute('id');

  links.forEach(function (link) {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      navigationMenuButton.classList.remove('menu--active');
      navigationMenu.classList.remove('navigation--active');

      let hrefLinkCheck = link.getAttribute('href');

      if (hrefLinkCheck == '#' + idAdvantagesCheck) {
        advantages.scrollIntoView({
          behavior: 'smooth'
        });
      } else if (hrefLinkCheck == '#' + idAchievementsCheck) {
        achievements.scrollIntoView({
          behavior: 'smooth'
        });
      } else if (hrefLinkCheck == '#' + idPricesCheck) {
        prices.scrollIntoView({
          behavior: 'smooth'
        });
      } else if (hrefLinkCheck == '#' + idContactsCheck) {
        contacts.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}());
