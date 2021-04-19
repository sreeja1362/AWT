 const firebaseConfig = {
  apiKey: "AIzaSyBaJn1-IAZM6keVRETnHrkXlJdkSNTEGZw",
  authDomain: "project1-8b531.firebaseapp.com",
  projectId: "project1-8b531",
  storageBucket: "project1-8b531.appspot.com",
  messagingSenderId: "742954810602",
  appId: "1:742954810602:web:d0c0bc2bb9c39a6985eb93"
};
firebase.initializeApp(firebaseConfig);

  var fbdb=firebase.database().ref().child("students");

  function insertData(){
      var rollno=document.getElementById("rollno").value;
      var name=document.getElementById("name").value;
      //console.log("data inserting");
      fbdb.child(rollno).set({
          Name:name,
          Rollno:rollno
      })
  }

  function deleteData(){
      var rollno=window.prompt("Enter the rollno to be deleted");
        fbdb.child(rollno).remove();
        console.log("Data deleted");
  }

  function updateData(){
    var rollno=document.getElementById("rollno").value;
    var name=document.getElementById("name").value;
    fbdb.child(rollno).update({Name:name});
  }

  function readData(){
      fbdb.on("value",(snap)=>{
          snap.forEach((data)=>{
              console.log(data.val().Name);
              console.log(data.val().Rollno);
          })
      })
  }