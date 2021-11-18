function States(){
 
  let name, age, profession, dish, check; 
  yourStates: {
      do {
        name = prompt('Введите ваше имя: ');
        age = prompt('Ваш возраст: ');
        profession = prompt('Ваша профессия: ');
        dish = prompt('Ваше любимое блюдо: ');
        check = confirm("Ваше имя: "+name+"\nВаш возраст: "+age+"\nВаша профессия: "+profession+"\nВаше любимое блюдо: "+dish+"\nВсё верно?")
      } 

      while (check==false) {
        break yourStates;
      }  
    } 

    return;
};

States();

