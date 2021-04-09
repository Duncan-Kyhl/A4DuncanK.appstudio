let babyNames = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 
'Ava', 'William', 'Sophia', 'Elijah', 'Isabella', 
'James', 'Charlotte', 'Benjamin', 'Amelia', 'Lucas', 
'Mia', 'Mason', 'Harper', 'Ethan', 'Evelyn']

let favorites = []

babyNames1.onshow=function(){
  for(let i = 0; i < babyNames.length; i++) {
    slctNames.addItem(babyNames[i])
    }
}

btnAdd.onclick=function() {
    names = slctNames.text
    let temp = []
    temp.push(names)
    
    // be able to add one name, or multiple 
    if (typeof(temp[0]) == "object") {
      for (i=0; i < temp[0].length; i++) 
        favorites.push(temp[0][i])
    } else {
      favorites.push(temp)
    }
}

btnFavNames1.onclick=function(){
  // ensure selection is 5 unique names
  uniqueFavorites = new Set(favorites)
  favorites = Array.from(uniqueFavorites)
  if (favorites.length < 5)
    lblMessage.value = "You must add at least 5 names to favorites first"
  else
    ChangeForm(favBabyNames)
}
