
let babyNames = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 
'Ava', 'William', 'Sophia', 'Elijah', 'Isabella', 
'James', 'Charlotte', 'Benjamin', 'Amelia', 'Lucas', 
'Mia', 'Mason', 'Harper', 'Ethan', 'Evelyn']

let favorites = []

babyNames.onshow=function(){
  for(let i = 0; i < babyNames.length; i++) {
    slctNames.addItem(babyNames[i])
    }
}

slctNames.onclick=function(){
  favorites.push(slctNames.text)
  console.log(slctNames.txt)
}

btnFavBabyNames.onclick=function(){
  ChangeForm(favBabyNames)
}

