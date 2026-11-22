/*
Loads and updates an existing assignment - Joseph
*/


// Waits until the page has loaded - Joseph
document.addEventListener(
    'DOMContentLoaded',
    function() {


        // Gets the assignment number - Joseph
        let assignmentId =
            document.querySelector(
                '#assignmentId'
            ).value;


        // Gets the saved assignment - Joseph
        let assignment =
            getAssignment(
                assignmentId
            );


        // Displays the assignment name - Joseph
        document.querySelector(
            '#title'
        ).value =
            assignment.title;


        // Displays the course - Joseph
        document.querySelector(
            '#course'
        ).value =
            assignment.course;


        // Displays the due date - Joseph
        document.querySelector(
            '#dueDate'
        ).value =
            assignment.dueDate;


        // Displays the priority - Joseph
        document.querySelector(
            '#priority'
        ).value =
            assignment.priority;


        // Displays the status - Joseph
        document.querySelector(
            '#status'
        ).value =
            assignment.status;


        // Displays the description - Joseph
        document.querySelector(
            '#description'
        ).value =
            assignment.description;


        // Gets the Edit form - Joseph
        const form =
            document.querySelector(
                '#editForm'
            );


        // Runs when Save Changes is pressed - Joseph
        form.addEventListener(
            'submit',
            function() {


                // Gets the updated information - Joseph
                const updatedAssignment = {

                    title:
                        document.querySelector(
                            '#title'
                        ).value,

                    course:
                        document.querySelector(
                            '#course'
                        ).value,

                    dueDate:
                        document.querySelector(
                            '#dueDate'
                        ).value,

                    priority:
                        document.querySelector(
                            '#priority'
                        ).value,

                    status:
                        document.querySelector(
                            '#status'
                        ).value,

                    description:
                        document.querySelector(
                            '#description'
                        ).value

                };


                // Saves over the original assignment - Joseph
                saveAssignment(
                    assignmentId,
                    updatedAssignment
                );

            }
        );

    }
);