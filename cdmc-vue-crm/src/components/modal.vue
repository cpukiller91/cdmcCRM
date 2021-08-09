<template>
    <div>
        <button v-if="menu" type="button" class="btn btn-primary waves-effect" data-toggle="modal" data-target="#large-Modal">Large</button>
        <div v-if="menu"  class="modal fade" id="large-Modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Modal title</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="form-group has-success row">
                            <div class="col-sm-2">
                                <label class="col-form-label" for="inputSuccess1">Input with
                                    success</label>
                            </div>
                            <div class="col-sm-10">
                                <input type="text" class="form-control form-control-success" id="inputSuccess1">
                                <div class="col-form-label">Success! You've done it.</div>
                            </div>
                        </div>
                        <select class="js-example-basic-hide-search col-sm-12" multiple="multiple" style="width: 75%">
                            <optgroup label="Developer">
                                <option value="AL">Smith</option>
                                <option value="WY">Peter</option>
                                <option value="WY">James</option>
                                <option value="WY">Hanry Die</option>
                                <option value="WY">John Doe</option>
                                <option value="WY">Harry Poter</option>
                            </optgroup>
                        </select>
                        <select class="js-example-disabled-results col-sm-12">
                            <option value="one">First</option>
                            <option value="two" disabled="disabled">Second
                                (disabled)
                            </option>
                            <option value="three">Third</option>
                        </select>
                        <input type="datetime-local">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary waves-effect waves-light ">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="animation-model">
            <button type="button" class="btn btn-default btn-outline-default waves-effect md-trigger" data-modal="modal-1">Fade in &amp; Scale</button>
            <button type="button" class="btn btn-primary btn-outline-primary waves-effect md-trigger" data-modal="modal-2">Slide in (right)</button>
            <button type="button" class="btn btn-success btn-outline-success waves-effect md-trigger" data-modal="modal-3">Slide in (bottom)</button>
            <button type="button" class="btn btn-warning btn-outline-warning waves-effect md-trigger" data-modal="modal-4">Newspaper</button>
            <button type="button" class="btn btn-danger btn-outline-danger waves-effect md-trigger" data-modal="modal-5">Fall</button>
            <button type="button" class="btn btn-info btn-outline-info waves-effect md-trigger" data-modal="modal-6">Side Fall</button>
            <button type="button" class="btn btn-default btn-outline-default waves-effect md-trigger" data-modal="modal-7">Sticky Up</button>
            <button type="button" class="btn btn-primary btn-outline-primary waves-effect md-trigger" data-modal="modal-8">3D Flip (horizontal)</button>
            <button type="button" class="btn btn-success btn-outline-success waves-effect md-trigger" data-modal="modal-9">3D Flip (vertical)</button>
            <button type="button" class="btn btn-warning btn-outline-warning waves-effect md-trigger" data-modal="modal-10">3D Sign</button>
            <button type="button" class="btn btn-danger btn-outline-danger waves-effect md-trigger" data-modal="modal-11">Super Scaled</button>
            <button type="button" class="btn btn-info btn-outline-info waves-effect md-trigger" data-modal="modal-12">Just Me</button>
            <button type="button" class="btn btn-primary btn-outline-primary waves-effect md-trigger" data-modal="modal-13">3D Slit</button>
            <button type="button" class="btn btn-success btn-outline-success waves-effect md-trigger" data-modal="modal-14">3D Rotate Bottom</button>
            <button type="button" class="btn btn-warning btn-outline-warning waves-effect md-trigger" data-modal="modal-15">3D Rotate In Left</button>
            <button type="button" class="btn btn-danger btn-outline-danger waves-effect md-trigger md-setperspective" data-modal="modal-17">Let me in</button>
            <button type="button" class="btn btn-default btn-outline-default waves-effect md-trigger md-setperspective" data-modal="modal-18">Make way!</button>
            <button type="button" class="btn btn-primary btn-outline-primary waves-effect md-trigger md-setperspective" data-modal="modal-19">Slip from top</button>
            <!--animation modal Dialogs start -->
            <div class="md-modal md-effect-1" id="modal-1">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-2" id="modal-2">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-3" id="modal-3">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-4" id="modal-4">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-5" id="modal-5">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-6" id="modal-6">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-7" id="modal-7">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-8" id="modal-8">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-9" id="modal-9">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-10" id="modal-10">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-11" id="modal-11">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-12" id="modal-12">
                <div class="md-content">
                    <h3><span class="text-muted text-center">Modal Dialog</span></h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-13" id="modal-13">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-14" id="modal-14">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-15" id="modal-15">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-17" id="modal-17">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-18" id="modal-18">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-19" id="modal-19">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-20" id="modal-20">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button type="button" class="btn btn-primary waves-effect md-close">Close</button>
                    </div>
                </div>
            </div>
            <!--animation modal  Dialogs ends -->
            <div class="md-overlay"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        data: () => ({
            menu:false,
            TaskItem:[],
            src:[
                "/files/assets/js/modalEffects.js",
            ]
        }),
        mounted() {
            //this.loadTask();
            this.src.forEach(element => {
                console.log("Modal Component",element);
                this.createElement(element)
            })
        },
        methods:{
            loadTask(){
                // Make a request for a user with a given ID
                this.$http.get('/task-boards?_limit=100')
                    .then( (response) => {
                        // handle success
                        //this.message = response.message[0].message;
                        this.TaskItem = response.data;

                        console.log("Task list Server",response);
                    })
                    .catch( (error) => {
                        console.log("Login error",error);
                        // handle error
                        console.log(error);
                    });
            },
            createElement(src){
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', src)
                document.head.appendChild(recaptchaScript)
            }
        }
    }
</script>