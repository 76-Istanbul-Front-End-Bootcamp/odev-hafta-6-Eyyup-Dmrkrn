
// Hocam, Class yapısında bir şeyler yapayım derken işler çok karıştı :( Yeterli vakit ayıramadım. Daha sonra tekrar uğraşacağım mutlaka.

window.mockApiUrl = "https://5ff8e5b817386d0017b519bd.mockapi.io/pets/";

class Requests{

window.removePet = (id) => {
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      const $cardEl = document.querySelector(`#pet${id}`);
      $cardEl.style.display = "none";
      window.isEditing = false;
    });
    // catch(err => console.log(err));
};

window.openPetDetail = (id) => {
  
  fetch(`${window.mockApiUrl}${id}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())
    .then((data) => {

    const modalEl = document.createElement("div");
    modalEl.setAttribute("id", "modalcontainer");
    document.body.appendChild(modalEl);   

    const boostrapModal = `
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
         role="dialog">
         <div class="modal-dialog" role="document">
             <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="card-title">${data.name}</h5>
                 </div>
                 <div class="modal-body" style="width: 200px; height: 300px;">
                 <img src=${data.image} class="card-img-top" style="margin: 0 auto; " / >
                 </div>
                
                 <div class="modal-footer">
                   <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
                 </div>
             </div>
         </div>
     </div>
       <div class="modal-backdrop fade show" id="backdrop" style="display: none;"></div>
       `;

    document.querySelector("#modalcontainer").innerHTML = boostrapModal;
  })
  .catch(err => console.log(err));
};

}

const request = new Requests();
const request2 = new Requests();

request.removePet(id);
request.openPetDetail(id);



