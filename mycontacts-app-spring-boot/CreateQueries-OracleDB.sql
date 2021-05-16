create table profile(userid number(6), name varchar2(15), password varchar2(15), phone number(10), dob date, constraint profile__pk primary key(userid));

create table profile_contacts(id number(6), useridref number(6), name varchar2(15), phone number(10), constraint profile_contacts_pk primary key(id), constraint profile_contacts_fk foreign key(useridref) references profile(userid));


create sequence profile_sequence start with 1000 increment by 1 nocache;

create sequence profile_contact_sequence start with 1 increment by 1 nocache;
