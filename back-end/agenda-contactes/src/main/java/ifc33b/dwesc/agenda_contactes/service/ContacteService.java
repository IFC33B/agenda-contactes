package ifc33b.dwesc.agenda_contactes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ifc33b.dwesc.agenda_contactes.repository.ContacteRepository;

@Service
public class ContacteService {
    @Autowired
    private ContacteRepository contacteRepository;

    // Buscar un contacto por su nombre
    public void getContacte() {}

    // Crear un contacto nuevo
    public void createContacte() {}
}
