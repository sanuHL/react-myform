import { useState } from "react";
import React from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   // console.log(name, value)
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    
    //alert(inputs.nic);
  }

   const validation = (nic,birth) => {
    var sNic = nic.substr(0, 2);
    var sTmonth = nic.substr(2, 3);
    let yearValue = parseInt(sNic);
    let tempMonth = parseInt(sTmonth);
    console.log( yearValue);

    let monthValue , month, date ;
if (tempMonth >=500)
{
 monthValue = tempMonth - 500;
}
else
{
  monthValue = tempMonth;
}

if (monthValue < 31) {
  month = '01';
  date = monthValue;
} else if (monthValue <= 60) {
  month = '02';
  date = Math.abs(31 - monthValue);
} else if (monthValue <= 91) {
  month = '03';
  date = Math.abs(60 - monthValue);
} else if (monthValue <= 121) {
  month = '04';
  date = Math.abs(91 - monthValue);
} else if (monthValue <= 152) {
  month = '05';
  date = Math.abs(121 - monthValue);
} else if (monthValue <= 182) {
  month = '06';
  date = Math.abs(152 - monthValue);
} else if (monthValue <= 213) {
  month = '07';
  date = Math.abs(182 - monthValue);
} else if (monthValue <= 244) {
  month = '08';
  date = Math.abs(213 - monthValue);
} else if (monthValue <= 274) {
  month = '09';
  date = Math.abs(244 - monthValue);
} else if (monthValue <= 305) {
  month = '10';
  date = Math.abs(274 - monthValue);
} else if (305 < monthValue && monthValue <= 335) {
  month = '11';
  date = Math.abs(305 - monthValue);
} else if (335 < monthValue && monthValue <= 366) {
  month = '12';
  date = Math.abs(335 - monthValue);
}
console.log("Birthday : " + yearValue, month, date);
    

// validate

let birthYear = parseInt(birth.substr(6, 7));
let birthMonth = parseInt(birth.substr(2,2)); 
let birthDate = parseInt(birth.substr(0, 2));

if (
  yearValue === birthYear &&
  month === birthMonth &&
  date === birthDate
) {
  console.log('Successfully validated !!');
} else {
  console.log('Plese recheck your details!!');
}


  }



  return (
      <div className="myform">
          <h2>Happy Holiday !</h2>
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>

      <br/>
      <br/>
      <label>Age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onCh
          onChange={handleChange}
        />
        </label>

        <br/>
        <br/>
        <label>No.of Rooms:
        <input 
          type="number" 
          name="room" 
          value={inputs.room || ""} 
          onChange={handleChange}
        />
        </label>


        <br/>
      <br/>
      <label>
            Nationality : 
            <select  onChange={handleChange}>
            <option value="local">Local</option>
              <option value="foreign">Foreign</option>
             
            </select>
          </label>



          <br/>
        <br/>
        <label>NIC :
        <input 
          type="string" 
          name="nic" 
          value={inputs.nic || ""} 
          onChange={handleChange}
        />
        </label>


        <br/>
        <br/>
        <label>Birth of Date:
        <input 
          type="date" 
          name="birth" 
          value={inputs.birth || ""} 
          onChange={handleChange}
        />
        </label>

          <br/>
      <br/>

        {/* <input type="submit" /> */}


        <button onClick={(validation)}>Submit</button>
        


  



    </form>









    </div>
  )
}

export default MyForm;
