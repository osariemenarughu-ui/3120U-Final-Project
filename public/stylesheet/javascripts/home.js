/*
Displays saved assignments on the Dashboard.
*/


document.addEventListener(
    'DOMContentLoaded',
    function() {


        let assignmentCount =
            getAssignmentCount();


        // Gets areas of the Dashboard
        const table =
            document.querySelector(
                '#assignmentTable'
            );


        const todoArea =
            document.querySelector(
                '#todoAssignments'
            );


        const progressArea =
            document.querySelector(
                '#progressAssignments'
            );


        const completedArea =
            document.querySelector(
                '#completedAssignments'
            );


        // Gets assignment totals
        let counts =
            getDashboardCounts();


        // Updates the summary cards
        document.querySelector(
            '#totalCount'
        ).textContent =
            counts.total;


        document.querySelector(
            '#todoCount'
        ).textContent =
            counts.todo;


        document.querySelector(
            '#progressCount'
        ).textContent =
            counts.progress;


        document.querySelector(
            '#completedCount'
        ).textContent =
            counts.completed;


        // Updates the board totals
        document.querySelector(
            '#todoColumnCount'
        ).textContent =
            counts.todo;


        document.querySelector(
            '#progressColumnCount'
        ).textContent =
            counts.progress;


        document.querySelector(
            '#completeColumnCount'
        ).textContent =
            counts.completed;


        // Displays every saved assignment
        for (
            let i = 0;
            i < assignmentCount;
            i++
        ) {


            let assignment =
                getAssignment(i);


            if (
                assignment.title == null ||
                assignment.title == ''
            ) {

                continue;

            }


            // Creates an assignment card
            const card =
                document.createElement(
                    'div'
                );


            card.className =
                'assignment-card';


            const cardTitle =
                document.createElement(
                    'h3'
                );


            cardTitle.textContent =
                assignment.title;


            card.appendChild(
                cardTitle
            );


            const courseText =
                document.createElement(
                    'p'
                );


            courseText.textContent =
                assignment.course;


            card.appendChild(
                courseText
            );


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


            // Puts the card in the correct column
            if (
                assignment.status ==
                'Not Started'
            ) {

                todoArea.appendChild(
                    card
                );

            }


            if (
                assignment.status ==
                'In Progress'
            ) {

                progressArea.appendChild(
                    card
                );

            }


            if (
                assignment.status ==
                'Completed'
            ) {

                completedArea.appendChild(
                    card
                );

            }


            // Creates an assignment table row
            const row =
                document.createElement(
                    'tr'
                );


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


            table.appendChild(
                row
            );

        }

    }
);


// Adds information to the table
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