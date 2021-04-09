// Note, customer and employee mean the same
// Assignment calls it employee, but the database calls it customer 


// declare new variables
let name = ''

// displaying first and last names together
function concatName() {
  name = (results[i][0] + ' ' + results[i][1])
  return name
}

// upon loading, query customer table for employee names
SecondProgram.onshow = function() {
  selEmployee.clear()
  // query database
  query = "SELECT first_name, last_name FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + user + "&pass=" + pass + "&database=" + user + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
  }
  
  // populate the dropdown with results from query
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

// Select an employee to delete
  selEmployee.onchange = function() {
    let deleteEmployee = selEmployee.value
    let foundEmployee = false

    // identify selected employee in customer table, if exists
    for (i = 0; i < results.length; i++) {
      name = concatName()
      if (deleteEmployee == name) {
        foundEmployee = true
        break
      }
    }
    
    // inform user of findings 
    if (foundEmployee == false) {
      lblMessage2.value = "That employee name is not in the database"
    } else if (foundEmployee == true) {
      lblMessage2.value = "We found that employee. Are you sure you want to delete it?"
    
    // store full record of employee to be deleted
        // full record: customer_id, first_name, last_name, street, city, state, zipcode, phone, email
        query = `SELECT * FROM customer WHERE CONCAT(first_name, ' ', last_name) = '${name}'`
        console.log(query)
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + user + "&pass=" + pass + "&database=" + user + "&query=" + query)
        
        // customer_id, first_name, last_name, street, city, state, zipcode, phone, email
        if (req.status == 200) {
          let fullRecord = JSON.parse(req.responseText)
          
          let deletedRecord = []
          
          // start at 1 to not pull primary key for adding back if auto_incremented 
          for (i = 1; i < fullRecord.length; i++) {
            deletedRecord.push(fullRecord[i])
          }
          console.log(deletedRecord)
          
          // delete employee
          b
          
          // output successfully deleted and clear inputs
          
          
          // undo delete and add customer back
          query = `INSERT INTO customer VALUES(${deletedRecord})`
          req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + user + "&pass=" + pass + "&database=" + user + "&query=" + query)
              
              // note, only the most recent delete is saved
              // an object with all deletes would be needed to store multiple and pull most recent
        
          // output successfully added
          console.log('add back customer: ',req.status)
        }
        
    // delete employee
        query = `DELETE FROM customer WHERE 
    
    
    query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aek25845&pass=Quincy1&database=aek25845&query=" + query)
  if (req.status == 200) //transit worked.
    if (req.responseText == 500)
      lblRefresh.textContent = `You have successfully deleted the customer named ${customerNameDel}. Refresh the page.`
    else
      lblRefresh.textContent = `There was a problem deleting ${customerNameDel} from the database.`
  else
    lblRefresh.textContent = `Error: ${req.status}`
}
    
    }
  }
}













