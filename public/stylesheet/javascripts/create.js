/*
Saves information entered in the assignment form.
*/


document.addEventListener(
    'DOMContentLoaded',
    function() {


        // Gets the form
        const form =
            document.querySelector(
                '#assignmentForm'
            );


        // Runs when the form is submitted
        form.addEventListener(
            'submit',
            function() {


                // Creates the assignment
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


                // Saves the assignment
                createAssignment(
                    assignment
                );

            }
        );

    }
);