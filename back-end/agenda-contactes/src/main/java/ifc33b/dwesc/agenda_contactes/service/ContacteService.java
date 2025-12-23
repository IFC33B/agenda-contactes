package ifc33b.dwesc.agenda_contactes.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ifc33b.dwesc.agenda_contactes.dto.ContacteRequest;
import ifc33b.dwesc.agenda_contactes.dto.ContacteResponse;
import ifc33b.dwesc.agenda_contactes.model.Contacte;
import ifc33b.dwesc.agenda_contactes.repository.ContacteRepository;

@Service
public class ContacteService {
    @Autowired
    private ContacteRepository contacteRepository;

    // Devolver todos los contactos
    public List<ContacteResponse> getAllContactes() {
        return this.contacteRepository.findAll().stream()
                .map(ContacteResponse::new)
                .collect(Collectors.toList());
    }

    // Buscar un contacto por su nombre
    public List<ContacteResponse> getContacte(String nom) {
        return this.contacteRepository.findByNomContainingIgnoreCase(nom).stream()
                .map(ContacteResponse::new)
                .collect(Collectors.toList());
    }

    // Crear un contacto nuevo
    public ContacteResponse createContacte(ContacteRequest contacteRequest) {
        Contacte contacte = new Contacte(contacteRequest.getNom(), contacteRequest.getTelefon(), contacteRequest.getEmail());
        contacteRepository.save(contacte);
        return new ContacteResponse(contacte);
    }
}
