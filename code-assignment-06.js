for (let i = 0; i < projects.length; i++) {
    console.log('Element ' + i + ' title: ' + projects[i].title);
    console.log(projects[i].id + '.png');

    if (projects[i].hasThumbnail === true) {
        console.log(projects[i].id + '.png');
    }
}

function describeFruit(fruit) {
    let description = 'The ' + fruit + ' is a delicious snack.'

    return description;
}



console.log(describeFruit('blueberry'));