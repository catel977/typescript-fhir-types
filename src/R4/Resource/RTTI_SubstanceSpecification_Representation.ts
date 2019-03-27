
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import { createEnumType } from '../../EnumType'




            export interface ISubstanceSpecification_Representation {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The type of structure (e.g. Full, Partial, Representative).
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
                     */
                    representation? : string;
                    

                    /**
                     * Extensions for representation
                     */
                    _representation? : IElement;
                    

                    /**
                     * An attached file with the structural representation.
                     */
                    attachment? : IAttachment;
                    
            }
        


        export const RTTI_SubstanceSpecification_Representation: t.Type<ISubstanceSpecification_Representation> = t.recursion( 'ISubstanceSpecification_Representation', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
representation: t.string,
_representation: RTTI_Element,
attachment: RTTI_Attachment
        })
        
        );
        

        