/*
Displays assignments on the Dashboard - Osa
*/


// Waits until the page is loaded - Osa
document.addEventListener(
    'DOMContentLoaded',
    function() {


        // Gets the number of assignments - Osa
        let assignmentCount =
            getAssignmentCount();


        // Gets the assignment table - Osa
        const table =
            document.querySelector(
                '#assignmentTable'
            );


        // Gets the To Do section - Osa
        const todoArea =
            document.querySelector(
                '#todoAssignments'
            );


        // Gets the In Progress section - Osa
        const progressArea =
            document.querySelector(
                '#progressAssignments'
            );


        // Gets the Completed section - Osa
        const completedArea =
            document.querySelector(
                '#completedAssignments'
            );


        // Gets the dashboard totals - Osa
        let counts =
            getDashboardCounts();


        // Displays total assignments - Osa
        document.querySelector(
            '#totalCount'
        ).textContent =
            counts.total;


        // Displays To Do total - Osa
        document.querySelector(
            '#todoCount'
        ).textContent =
            counts.todo;


        // Displays In Progress total - Osa
        document.querySelector(
            '#progressCount'
        ).textContent =
            counts.progress;


        // Displays Completed total - Osa
        document.querySelector(
            '#completedCount'
        ).textContent =
            counts.completed;


        // Updates To Do column count - Osa
        document.querySelector(
            '#todoColumnCount'
        ).textContent =
            counts.todo;


        // Updates In Progress column count - Osa
        document.querySelector(
            '#progressColumnCount'
        ).textContent =
            counts.progress;


        // Updates Completed column count - Osa
        document.querySelector(
            '#completeColumnCount'
        ).textContent =
            counts.completed;


        // Goes through each assignment - Osa
        for (
            let i = 0;
            i < assignmentCount;
            i++
        ) {


            // Gets one assignment - Osa
            let assignment =
                getAssignment(i);


            // Skips an empty assignment - Osa
            if (
                assignment.title == null ||
                assignment.title == ''
            ) {

                continue;

            }


            // Creates the assignment card - Osa
            const card =
                document.createElement(
                    'div'
                );


            card.className =
                'assignment-card';


            // Creates the assignment title - Osa
            const cardTitle =
                document.createElement(
                    'h3'
                );


            cardTitle.textContent =
                assignment.title;


            card.appendChild(
                cardTitle
            );


            // Creates the course text - Osa
            const courseText =
                document.createElement(
                    'p'
                );


            courseText.textContent =
                assignment.course;


            card.appendChild(
                courseText
            );


            // Creates the due date text - Osa
            const dateText =
                document.createElement(
                    'p'
                );


            dateText.textContent =
                'Due: ' +
                assignment.dueDate;


            card.appendChild(
                dateText
            );


            // Creates the priority text - Osa
            const priorityText =
                document.createElement(
                    'p'
                );


            priorityText.textContent =
                'Priority: ' +
                assignment.priority;


            card.appendChild(
                priorityText
            );


            // Places Not Started assignments in To Do - Osa
            if (
                assignment.status ==
                'Not Started'
            ) {

                todoArea.appendChild(
                    card
                );

            }


            // Places active assignments in In Progress - Osa
            if (
                assignment.status ==
                'In Progress'
            ) {

                progressArea.appendChild(
                    card
                );

            }


            // Places finished assignments in Completed - Osa
            if (
                assignment.status ==
                'Completed'
            ) {

                completedArea.appendChild(
                    card
                );

            }


            // Creates a new table row - Osa
            const row =
                document.createElement(
                    'tr'
                );


            // Adds assignment information to the table - Osa
            addTableCell(
                row,
                assignment.title
            );


            addTableCell(
                row,
                assignment.course
            );


            addTableCell(
                row,
                assignment.dueDate
            );


            addTableCell(
                row,
                assignment.priority
            );


            addTableCell(
                row,
                assignment.status
            );


            // Adds the row to the table - Osa
            table.appendChild(
                row
            );

        }

    }
);


// Creates one table cell - Osa
function addTableCell(
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