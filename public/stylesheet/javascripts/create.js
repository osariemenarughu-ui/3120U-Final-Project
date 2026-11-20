/*
Handles the Create Assignment form - Osa
*/


// Waits until the page is loaded - Osa
document.addEventListener(
    'DOMContentLoaded',
    function() {


        // Gets the assignment form - Osa
        const form =
            document.querySelector(
                '#assignmentForm'
            );


        // Runs when the form is submitted - Osa
        form.addEventListener(
            'submit',
            function() {


                // Gets the information from the form - Osa
                const assignment = {

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


                // Saves the assignment - Osa
                createAssignment(
                    assignment
                );

            }
        );

    }
);