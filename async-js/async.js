const stocks = {
  fruits: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  liquid: ['Water', 'Ice'],
  holder: ['Cone', 'Cup', 'Stick'],
  toppings: ['Chocolate', 'Peanuts'],
};

const isShopOpen = true;

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log('- Shop is closed'));
    }
  });
};

const kitchen = async () => {
  try {
    await time(2000);
    console.log(`- Customer selected: ${stocks.fruits[2]}`);
    console.log('- Start the production');
    await time(2000);
    console.log('- Cut the fruit');
    await time(2000);
    console.log('- Add water and ice');
    await time(1000);
    console.log('- Start the machine');
    await time(2000);
    console.log('- Ice-cream placed on cone');
    await time(2000);
    console.log('- Chocolate added as a topping');
    await time(2000);
    console.log('- Here is your Ice-cream, enjoy!');
  } catch (error) {
    console.log('- Customer left', error);
  } finally {
    console.log('- Day ended, shop is closed!');
  }
};

kitchen();
