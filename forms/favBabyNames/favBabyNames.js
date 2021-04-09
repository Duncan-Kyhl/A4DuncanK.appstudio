favBabyNames.onshow=function(){
  imgBaby.hidden = true
  drpFavorites.clear()
  console.log(favorites)
  for (i=0; i < favorites.length; i++) 
  drpFavorites.addItem(favorites[i])
}

drpFavorites.onclick=function(s){
  if (typeof(s) == "object") {
        return
      } else {
        lblFavoriteName.value = `Your favorite baby name is ${s}.`
        imgBaby.hidden = false
    }
}

btnFirstProgram.onclick=function(){
  ChangeForm(FirstProgram)
}


btnBack.onclick=function(){
  ChangeForm(babyNames1)
}


btnClearFavorites.onclick=function(){
  favorites = []
}
