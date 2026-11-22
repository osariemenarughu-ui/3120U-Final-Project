/*
Shared assignment storage functions.
*/


// Gets the total number of assignments
function getAssignmentCount() {

    let count =
        localStorage.getItem(
            'assignmentCount'
        );


    if (
        count == null
    ) {

        return 0;

    }


    return parseInt(
        count
    );

}


// Gets one saved assignment
function getAssignment(
    id
) {

    return {

        title:
            localStorage.getItem(
                'title' + id
            ),

        course:
            localStorage.getItem(
                'course' + id
            ),

        dueDate:
            localStorage.getItem(
                'dueDate' + id
            ),

        priority:
            localStorage.getItem(
                'priority' + id
            ),

        status:
            localStorage.getItem(
                'status' + id
            ),

        description:
            localStorage.getItem(
                'description' + id
            )

    };

}


// Saves an assignment
function saveAssignment(
    id,
    assignment
) {

    localStorage.setItem(
        'title' + id,
        assignment.title
    );


    localStorage.setItem(
        'course' + id,
        assignment.course
    );


    localStorage.setItem(
        'dueDate' + id,
        assignment.dueDate
    );


    localStorage.setItem(
        'priority' + id,
        assignment.priority
    );


    localStorage.setItem(
        'status' + id,
        assignment.status
    );


    localStorage.setItem(
        'description' + id,
        assignment.description
    );

}


// Creates a new assignment
function createAssignment(
    assignment
) {

    let count =
        getAssignmentCount();


    saveAssignment(
        count,
        assignment
    );


    count++;


    localStorage.setItem(
        'assignmentCount',
        count
    );

}


// Calculates the dashboard totals
function getDashboardCounts() {

    let assignmentCount =
        getAssignmentCount();


    let total = 0;

    let todo = 0;

    let progress = 0;

    let completed = 0;


    for (
        let i = 0;
        i < assignmentCount;
        i++
    ) {


        let assignment =
            getAssignment(i);


        if (
            assignment.title != null &&
            assignment.title != ''
        ) {


            total++;


            if (
                assignment.status ==
                'Not Started'
            ) {

                todo++;

            }


            if (
                assignment.status ==
                'In Progress'
            ) {

                progress++;

            }


            if (
                assignment.status ==
                'Completed'
            ) {

                completed++;

            }

        }

    }


    return {

        total: total,

        todo: todo,

        progress: progress,

        completed: completed

    };

}