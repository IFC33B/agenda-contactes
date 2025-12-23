package ifc33b.dwesc.agenda_contactes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import ifc33b.dwesc.agenda_contactes.dto.ContacteRequest;
import ifc33b.dwesc.agenda_contactes.dto.ContacteResponse;
import ifc33b.dwesc.agenda_contactes.service.ContacteService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/contactes")
public class ContacteController {
    @Autowired
    ContacteService contacteService;

    @GetMapping() // Devolver todos los contactos
    public ResponseEntity<List<ContacteResponse>> getAllContactes() {
        // Service
        List<ContacteResponse> contactes = contacteService.getAllContactes();

        // HTTP response
        return ResponseEntity.ok(contactes);
    }

    @GetMapping("/{nom}") // Devolver un contacto por su nombre
    public ResponseEntity<List<ContacteResponse>> getContacte(@PathVariable String nom) {
        // Service
        List<ContacteResponse> contactes = contacteService.getContacte(nom);

        // HTTP response
        return ResponseEntity.ok(contactes);
    }

    @PostMapping() // Crear un contacto
    public ResponseEntity<ContacteResponse> createContacte(@RequestBody ContacteRequest contacteRequest) {
        // Service
        ContacteResponse contacteResponse = contacteService.createContacte(contacteRequest);

        // HTTP response
        return new ResponseEntity<>(contacteResponse, HttpStatus.CREATED);
    }
}