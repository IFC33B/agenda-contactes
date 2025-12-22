package ifc33b.dwesc.agenda_contactes.dto;

import ifc33b.dwesc.agenda_contactes.model.Contacte;
import lombok.Data;

@Data
public class ContacteResponse {
    // Atributos
    private Long id;
    private String nom;
    private int telefon;
    private String email;

    // Constructor
    public ContacteResponse(Contacte contacte) {
        this.setId(contacte.getId());
        this.setNom(contacte.getNom());
        this.setTelefon(contacte.getTelefon());
        this.setEmail(contacte.getEmail());
    }
}