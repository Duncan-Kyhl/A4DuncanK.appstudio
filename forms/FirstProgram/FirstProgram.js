// declare variables
let user = 'dmk88050'
let pass = 'Dmk!22099'
let query = ''
let req = ''
let states = []

FirstProgram.onshow = function() {
  drpStates.clear()
  // query database
  query = "SELECT state, first_name, last_name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + user + "&pass=" + pass + "&database=" + user + "&query=" + query)
  // HTTP Status Successful
  if (req.status == 200) {
    let results = JSON.parse(req.responseText)
    if (results.length == 0) {
      lblMessage1.value = "There are no states in the database."
      console.log("There are no states in the database.")
    } else {
      // add only the distinct states to the dropdown
      // add to list, convert to set, then back to list
      for (i = 0; i < results.length; i++)
        states.push(results[i][0])
      let uniqueStates = new Set(states)
      let options = Array.from(uniqueStates)
      for (i = 0; i < options.length; i++)
        drpStates.addItem(options[i])

      // add names to list group based on dropdown selection
      drpStates.onclick = function(s) {
        for (i = 0; i < results.length; i++)
          if (results[i][0] == s) {
            let name = results[i][1] + ' ' + results[i][2]
            lgEmployees.addItem(name)
          }
        }
      }
    } else
        lblMessage1.value = "Error code: " + req.status
}

btnNextForm.onclick=function(){
  ChangeForm(SecondProgram)
}
