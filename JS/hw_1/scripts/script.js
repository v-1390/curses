var p123 = '<p id="one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsum earum vero autem, sit soluta nesciunt modi. Odit commodi incidunt eos iusto. Officiis vitae reiciendis aut quaerat delectus dicta quisquam!</p><p id="two"> Dolorem sit nulla tempore, placeat veniam voluptas totam! Suscipit consequatur corporis quibusdam fugiat sit? Eaque culpa doloremque architecto consectetur.</p><p id="three">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt repudiandae eligendi illo cum maiores perspiciatis harum sapiente ab ullam amet <span id="ttt">cumque</span>, saepe, corporis nobis dolore blanditiis quod molestias. Omnis, harum.</p>';

document.write(p123);

var p1 =  document.getElementById('one').innerHTML;
alert(p1);

document.getElementById('two').insertAdjacentText("afterBegin", "Hello world");

document.getElementById('ttt').innerHTML = "Lorem ipsum";