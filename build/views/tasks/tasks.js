function getView(){
    let view = {
        calendar:()=>{
            return `
            <div class="p-5">
                <h2 class="mb-4">Tareas</h2>
                <div class="card">
                    <div class="card-body p-0">
                        <div id="calendar">
                        </div>
                    </div>
                </div>
            </div>
            `
        },
        modal_evento:()=>{
            return `
                <div id="modal-view-event" class="modal modal-top fade calendar-modal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <h4 class="modal-title"><span class="event-icon"></span><span class="event-title"></span></h4>
                                <div class="event-body">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        modal_nuevo_evento:()=>{
            return `
                <div id="modal-view-event-add" class="modal modal-top fade calendar-modal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <form id="add-event">
                                <div class="modal-body">
                                    <h4>Add Event Detail</h4>        
                                     <div class="form-group">
                                        <label>Event name</label>
                                        <input type="text" class="form-control" name="ename">
                                    </div>
                                    <div class="form-group">
                                        <label>Event Date</label>
                                        <input type='text' class="datetimepicker form-control" name="edate">
                                    </div>        
                                    <div class="form-group">
                                        <label>Event Description</label>
                                        <textarea class="form-control" name="edesc"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Event Color</label>
                                        <select class="form-control" name="ecolor">
                                        <option value="fc-bg-default">fc-bg-default</option>
                                        <option value="fc-bg-blue">fc-bg-blue</option>
                                        <option value="fc-bg-lightgreen">fc-bg-lightgreen</option>
                                        <option value="fc-bg-pinkred">fc-bg-pinkred</option>
                                        <option value="fc-bg-deepskyblue">fc-bg-deepskyblue</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Event Icon</label>
                                        <select class="form-control" name="eicon">
                                        <option value="circle">circle</option>
                                        <option value="cog">cog</option>
                                        <option value="group">group</option>
                                        <option value="suitcase">suitcase</option>
                                        <option value="calendar">calendar</option>
                                        </select>
                                    </div>        
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary" >Save</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>        
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            `
        }
    }

    root.innerHTML = view.calendar() + view.modal_evento() + view.modal_nuevo_evento();

};

function addEventListeners(){
    
    //iniciar_calendario();


};

function iniciar_calendario(){
    
        $('.datetimepicker').datepicker({
            timepicker: true,
            language: 'en',
            range: true,
            multipleDates: true,
                multipleDatesSeparator: " - "
          });
        $("#add-event").submit(function(e){
            e.preventDefault();
            alert("Submitted");
            var values = {};
            $.each($('#add-event').serializeArray(), function(i, field) {
                values[field.name] = field.value;
            });
            console.log(
              values
            );
        });

      
      (function () {    
          'use strict';
          // ------------------------------------------------------- //
          // Calendar
          // ------------------------------------------------------ //
          
              jQuery('#calendar').fullCalendar({
                  themeSystem: 'bootstrap4',
                  // emphasizes business hours
                  businessHours: false,
                  defaultView: 'month',
                  // event dragging & resizing
                  editable: true,
                  // header
                  header: {
                      left: 'title',
                      center: 'month,agendaWeek,agendaDay',
                      right: 'today prev,next'
                  },
                  events: [
                      {
                          title: 'Barber',
                          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                          start: '2023-05-05',
                          end: '2023-05-05',
                          className: 'fc-bg-default',
                          icon : "circle"
                      },
                      {
                          title: 'Flight Paris',
                          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                          start: '2023-08-08T14:00:00',
                          end: '2023-08-08T20:00:00',
                          className: 'fc-bg-deepskyblue',
                          icon : "cog",
                          allDay: false
                      },
                      {
                          title: 'Birthday',
                          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
                          start: '2023-09-13',
                          end: '2023-09-14',
                          className: 'fc-bg-default',
                          icon : "birthday-cake"
                      }
                  ],
                  eventRender: function(event, element) {
                      if(event.icon){
                          element.find(".fc-title").prepend("<i class='fa fa-"+event.icon+"'></i>");
                      }
                    },
                  dayClick: function() {
                      jQuery('#modal-view-event-add').modal();
                  },
                  eventClick: function(event, jsEvent, view) {
                          jQuery('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
                          jQuery('.event-title').html(event.title);
                          jQuery('.event-body').html(event.description);
                          jQuery('.eventUrl').attr('href',event.url);
                          jQuery('#modal-view-event').modal();
                  },
              })
          });
        
}

function initView(){
    getView();
    addEventListeners();
};