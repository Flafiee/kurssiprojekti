console.log("Lomakesivu avattu");
   
const openDialogBtn = document.getElementById('open-dialog-btn');
const closeDialogBtn = document.getElementById('close-dialog-btn');
const commentDialog = document.getElementById('comment-dialog');
const submitBtn = document.getElementById('submit-btn');

openDialogBtn.addEventListener('click', () => {
    commentDialog.showModal();
});


closeDialogBtn.addEventListener('click', () => {
    commentDialog.close();
});


submitBtn.addEventListener('click', () => {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const birthday = document.getElementById('birthday').value;
    const message = document.getElementById('message').value;

    console.log("Etunimi:", fname);
    console.log("Sukunimi:", lname);
    console.log("Sähköposti:", email);
    console.log("Syntymäpäivä:", birthday);
    console.log("Viesti:", message);

    commentDialog.close();
});