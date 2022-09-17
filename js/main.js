$(document).ready(function () {

    showStartModal();
});


function showStartModal() {
    //start timeout
    if (localStorage.getItem('modalYesBtn') != 1) {
        setTimeout(function () {
            const startModal = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="modal-yes-btn">Принимаю условия</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`

            let modal = document.querySelector('body');
            modal.insertAdjacentHTML('afterbegin', startModal);

            $('#exampleModal').modal('show');
            $('#modal-yes-btn').on('click', function () {
                //save state modal
                localStorage.setItem('modalYesBtn', 1);
                $('#exampleModal').modal('hide');
            });
        }, 1000);
    }
}