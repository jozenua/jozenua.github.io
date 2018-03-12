let project1 = {
    id: 1,
    title: 'Assignment 1',
    hasThumbnail: true
}
let project2 = {
    id: 2,
    title: 'Assignment 2',
    hasThumbnail: false
}

let projects = [
    project1,
    project2
]

for (let i = 0; i < projects.length; i++) {
    console.log('Element ' + i + ' title: ' + projects[i].title);
    console.log(projects[i].id+'.png');

    if (projects[i].hasThumbnail === true) {
        console.log(projects[i].id + '.png');
    }
}

