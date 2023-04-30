Create Nudge:
URL: localhost:localhost:8080/api/v3/app/events
Request Type: GET
Description: This API endpoint is used to creates a new nudge for an event.


Read Nudge:
URL: localhost:8080/api/v3/app/events?id=_id
Request Type: GET
Description: This API endpoint is used to retrieve the details of a specific nudge, identified by its unique ID. A successful response will return the nudge object with all of its properties.


Read Nudge By Pagination:
URL: localhost:8080/api/v3/app/event?type=Event&limit=5&page=1
Request Type: GET
Description: This API endpoint is used to retrieve the details Gets an event by its recency & paginate results by page number and limit of events per page. A successful response will return the nudge object with all of its properties.


Update Nudge:
URL: localhost:8080/api/v3/app/events/id
Request Type: PUT
Description: This API endpoint is used to update the properties of a specific nudge, identified by its unique ID. The request should contain the properties to be updated, including the nudge title, cover image file, description, icon, invitation message, and send datetime. A successful response will return the updated nudge object with all of its properties.


Delete Nudge:
URL: localhost:8080/api/v3/app/events/id
Request Type: DELETE
Description: This API endpoint is used to delete a specific nudge, identified by its unique ID. A successful response will return a message confirming the deletion of the nudge.