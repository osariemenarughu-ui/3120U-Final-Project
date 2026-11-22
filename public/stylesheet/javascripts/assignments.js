/*
Displays saved assignments on the Assignments page - Zaki
*/


// Waits until the page has loaded - Zaki
document.addEventListener(
    'DOMContentLoaded',
    function() {


        // Gets the number of saved assignments - Zaki
        let assignmentCount =
            getAssignmentCount();


        // Gets the assignment table - Zaki
        const table =
            document.querySelector(
                '#assignmentTable'
            );


        // Gets the empty message area - Zaki
        const emptyMessage =
            document.querySelector(
                '#emptyMessage'
            );


        // Shows a message when no assignments exist - Zaki
        if (
            assignmentCount == 0
        ) {

            emptyMessage.textContent =
                'No assignments have been created yet.';

        }


        // Goes through each saved assignment - Zaki
        for (
            let i = 0;
            i < assignmentCount;
            i++
        ) {


            // Gets one assignment - Zaki
            let assignment =
                getAssignment(i);


            // Skips empty assignments - Zaki
            if (
                assignment.title == null ||
                assignment.title == ''
            ) {

                continue;

            }


            // Creates a table row - Zaki
            const row =
                document.createElement(
                    'tr'
                );


            // Adds the assignment name - Zaki
            addCell(
                row,
                assignment.title
            );


            // Adds the course - Zaki
            addCell(
                row,
                assignment.course
            );


            // Adds the due date - Zaki
            addCell(
                row,
                assignment.dueDate
            );


            // Adds the priority - Zaki
            addCell(
                row,
                assignment.priority
            );


            // Adds the status - Zaki
            addCell(
                row,
                assignment.status
            );


<<<<<<< HEAD
=======
            // Creates the Edit button - Joseph
            const actionCell =
                document.createElement(
                    'td'
                );


            const editLink =
                document.createElement(
                    'a'
                );


            editLink.textContent =
                'Edit';


            editLink.href =
                '/edit?id=' + i;


            actionCell.appendChild(
                editLink
            );


            row.appendChild(
                actionCell
            );


>>>>>>> 540d454 (Final)
            // Adds the row to the table - Zaki
            table.appendChild(
                row
            );

        }

    }
);


// Creates one table cell - Zaki
function addCell(
    row,
    text
) {

    const cell =
        document.createElement(
            'td'
        );


    cell.textContent =
        text;


    row.appendChild(
        cell
    );

}