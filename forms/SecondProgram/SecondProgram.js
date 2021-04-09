//

let name = ''

function concatName() {
  name = (results[i][0] + ' ' + results[i][1])
  return name
}

SecondProgram.onshow = function() {
  selEmployee.clear()
  // query database
  query = "SELECT first_name, last_name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + user + "&pass=" + pass + "&database=" + user + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
  }

  btnShowEmployees.onclick = function() {
    selEmployee.clear()
    if (results.length == 0) {
      console.log = "There are no names in the database."
    } else {
      for (i = 0; i < results.length; i++) {
        name = concatName()
        selEmployee.addItem(name)
      }
    }
  }

  selEmployee.onchange = function() {
    let deleteEmployee = selEmployee.value
    let foundEmployee = false
    console.log(deleteEmployee)

    for (i = 0; i < results.length; i++) {
      name = concatName()
      if (deleteEmployee == name) {
        foundEmployee = true
        break
      }
      if (foundEmployee == false) {
        lblMessage2.value = "That employee name is not in the database"
      } else if (foundEmployee == true) {
        lblMessage2.value = "We found that employee. Want to delete it?"
      }
    }
  }
}
