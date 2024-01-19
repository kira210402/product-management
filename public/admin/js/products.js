// Change status 
const buttonsChangeStatus = document.querySelectorAll("[button-change-status]");
if (buttonsChangeStatus.length > 0) {
    const formChangeStatus = document.querySelector("#form-change-status");
    const path = formChangeStatus.getAttribute("data-path");

    buttonsChangeStatus.forEach(button => {
        button.addEventListener("click", () => {
            const statusCurrent = button.getAttribute("data-status");
            const id = button.getAttribute("data-id");

            let statusChange = statusCurrent === "active" ? "inactive" : "active";

            const action = `${path}/${statusChange}/${id}?_method=PATCH`;
            formChangeStatus.action = action; // setAttribute cũng được nhưng action là attribute mặc định

            formChangeStatus.submit();
        })
    })
}

// End Change status 

// Change multi status 
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
    const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
    const inputsId = checkboxMulti.querySelectorAll("input[name='id']");

    inputCheckAll.addEventListener("click", () => {
        if (inputCheckAll.checked) {
            inputsId.forEach(input => {
                input.checked = true;
            })
        } else {
            inputsId.forEach(input => {
                input.checked = false;
            })

        }
    })

    inputsId.forEach(input => {
        input.addEventListener("click", () => {
            const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;

            if (countChecked == inputsId.length) {
                inputCheckAll.checked = true;
            } else {
                inputCheckAll.checked = false;
            }
        })
    })
}

// End Change multi status 

// Form change multi
const formChangeMulti = document.querySelector("[form-change-multi]");

if(formChangeMulti) {
    formChangeMulti.addEventListener("submit", (e) => {
        e.preventDefault(); // Tránh load lại trang

        const checkboxMulti = document.querySelector("[checkbox-multi]");

        const inputsChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");

        if(inputsChecked.length > 0) {
            let ids = [];
            const inputIds = formChangeMulti.querySelector("input[name='ids']");
            
            inputsChecked.forEach(input => {
                const id = input.value;
                ids.push(id);
            })

            inputIds.value = ids.join(", ");

            formChangeMulti.submit();
        } else {
            alert("Vui lòng chọn ít nhất 1 ô")
        }

    })
}

// End Form change multi
